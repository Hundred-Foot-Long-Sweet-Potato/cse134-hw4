//All variables required
const blogCreate = document.getElementById("postCreate");
blogCreate.addEventListener("click", blogPopUp);
const blogDia = document.getElementById("blogCreateDialog");
const editDia = document.getElementById("blogEditDialog");
const editConfirm = document.getElementById("editSubmit");
editConfirm.addEventListener("click",confirmEdit);
const blogConfirm = document.getElementById("blogCreate");
blogConfirm.addEventListener("click",createBlogPost);

class blog{
    constructor(blogNum,blogElement){
        this.blogNum = blogNum;
        this.blogElement = blogElement;
    }
}
//Javascript array with all blogs
let blogs = [];
let counter = 0;
let targetEditBlog;
//Onload function
window.onload = function(){
    let numBlogs = localStorage.getItem("NumBlogs");
    for (let i = 0; i < numBlogs;i++)
    {
        //Append each blog to page and blogs array
        let blog = localStorage.getItem(i);
        document.body.appendChild(blog.blogElement);
        blogs.push(blog);
    }
}

//OnExit function
window.onbeforeunload = function(){
    //Store all of blogs
    for (let i =0; i < blogs.length;i++)
    {
        localStorage.setItem(i,blogs[i]);
    }
    //Store num of blogs
    localStorage.setItem("NumBlogs",blogs.length);
}

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
    //CURRENTLY USING ID HERE -> Probably isn't an issue since it's currently not attached to doc?
    let title = document.getElementById("diaTitle").value;
    let date = document.getElementById("diaDate").value;
    let summary = document.getElementById("diaSummary").value;
    clon.getElementById("blogTitle").innerHTML = title;
    clon.getElementById("blogDate").innerHTML = date;
    clon.getElementById("blogSummary").innerHTML = summary;
    let currBlog = new blog(counter,clon);
    counter++;
    blogs.push(currBlog);
    //Link this blog posts button with itself
    clon.getElementById("blogDelete").addEventListener("click",()=>{deleteBlogPost(currBlog)});
    clon.getElementById("blogEdit").addEventListener("click",()=>{
        editBlogPost();
        targetEditBlog = currBlog;
    });
    //Append 
    document.body.appendChild(clon);
    console.log(blogs);
}

function deleteBlogPost(target)
{
    let targetNum = target.blogNum;
    //Remove the section in question
    console.log(targetNum);
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
    localStorage.removeItem(target);
    console.log(blogs);
}

function editBlogPost()
{
    //Show up the form again
    editDia.showModal();
}

function confirmEdit()
{
    //Find correct section
    //Switched to class here because ID obviously doesn't work when there is like 5 of them
    let title = document.getElementById("editTitle").value;
    let date = document.getElementById("editDate").value;
    let summary = document.getElementById("editSummary").value;
    document.getElementsByClassName("blogTitle")[targetEditBlog.blogNum].innerHTML = title;
    document.getElementsByClassName("blogDate")[targetEditBlog.blogNum].innerHTML = date;
    document.getElementsByClassName("blogSummary")[targetEditBlog.blogNum].innerHTML = summary;
    console.log(blogs);
}