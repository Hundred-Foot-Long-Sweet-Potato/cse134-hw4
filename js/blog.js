//All variables required
const blogCreate = document.getElementById("postCreate");
blogCreate.addEventListener("click", blogPopUp);
const blogDia = document.getElementById("blogCreateDialog");
const editDia = document.getElementById("blogEditDialog");
const blogConfirm = document.getElementById("blogCreate");
blogConfirm.addEventListener("click",createBlogPost);

class blog{
    constructor(blogNum){
        this.blogNum = blogNum;
    }
}
//Javascript array with all blogs
let blogs = [];
let counter = 0;

//Pop up to get details
function blogPopUp()
{
    blogDia.showModal();
}

//Creates the blog post
function createBlogPost()
{
    //W3School Code example for html template
    //Simply gets the template -> creates a clone -> adds clone to document (Always [0] here for create)
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    //Fill details in template
    clon.getElementById("blogTitle").innerHTML = document.getElementById("diaTitle").value;
    clon.getElementById("blogDate").innerHTML = document.getElementById("diaDate").value;
    clon.getElementById("blogSummary").innerHTML = document.getElementById("diaSummary").value;
    let currBlog = new blog(counter);
    counter++;
    blogs.push(currBlog);
    //Link this blog posts button with itself
    clon.getElementById("blogDelete").addEventListener("click",()=>{deleteBlogPost(currBlog)});
    clon.getElementById("blogEdit").addEventListener("click",()=>{editBlogPost(clon)})
    //Append 
    document.body.appendChild(clon);
}

function deleteBlogPost(target)
{
    let targetNum = target.blogNum;
    //Remove the section in question
    document.getElementsByTagName("section")[targetNum].remove();
    //Remove blog from array
    blogs.splice(blogs.indexOf(target),1);
    counter--;
    //Update all blogNums
    for (let i = 0; i < blogs.length;i++)
    {   
        if (i < targetNum) continue;
        blogs[i].blogNum--;
    }
}

function editBlogPost(target)
{
    //Show up the form again
    editDia.showModal();
    //Update values (Do not do any appending or cloning)
    target.getElementById("blogTitle").innerHTML = document.getElementById("editTitle").value;
    target.getElementById("blogDate").innerHTML = document.getElementById("editDate").value;
    target.getElementById("blogSummary").innerHTML = document.getElementById("editSummary").value;
}