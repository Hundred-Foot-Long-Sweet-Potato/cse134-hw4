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
    constructor(blogNum,title,date,summary){
        this.blogNum = blogNum;
        this.title = title;
        this.date = date;
        this.summary = summary;
    }
    update(title,date,summary)
    {
        this.title = title;
        this.date = date;
        this.summary = summary;
    }
}
//Javascript array with all blogs
let blogs = [];
let counter = 0;
let targetEditBlog;
//Onload function
window.onload = function(){
    let numBlogs = localStorage.getItem("NumBlogs");
    if (numBlogs == null) return;
    for (let i = 0; i < numBlogs * 3;i++)
    {
        //Get blog data
        let title = localStorage.getItem(i);
        let date = localStorage.getItem(i+1);
        let summary = localStorage.getItem(i+2);
        i += 2;
        //Create and update
        var temp = document.getElementsByTagName("template")[0];
        var clon = temp.content.cloneNode(true);
        clon.getElementById("blogTitle").innerHTML = title;
        clon.getElementById("blogDate").innerHTML = date;
        clon.getElementById("blogSummary").innerHTML = summary;
        let currBlog = new blog(i,title,date,summary);
        counter++;
        clon.getElementById("blogDelete").addEventListener("click",()=>{deleteBlogPost(currBlog)});
        clon.getElementById("blogEdit").addEventListener("click",()=>{
            editBlogPost();
            targetEditBlog = currBlog;
        });
        blogs.push(currBlog);
        document.body.appendChild(clon);
    }
}

//OnExit function
window.onbeforeunload = function(){
    //Store all of blogs
    for (let i =0; i < blogs.length * 3;i++)
    {
        console.log(blogs[i].title);
        //Store blog data
        localStorage.setItem(i,blogs[i].title);
        localStorage.setItem(i+1,blogs[i].date);
        localStorage.setItem(i+2,blogs[i].summary);
        i += 2;
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
    let currBlog = new blog(counter,title,date,summary);
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
    targetEditBlog.update(title,date,summary);
    console.log(blogs);
}