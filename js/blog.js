//All variables required
const blogCreate = document.getElementById("postCreate");
blogCreate.addEventListener("click", blogPopUp);
const blogDia = document.getElementById("blogCreateDialog");
const blogConfirm = document.getElementById("blogCreate");
blogConfirm.addEventListener("click",createBlogPost);

//Javascript array to hold data
let blogs = [];
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
    var temp = document.getElementsByClassName("templateBlog")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    //Fill details of template
    document.getElementsByClassName("blogTitle")[0].innerHTML = document.getElementsByClassName("diaTitle")[0].value;
    document.getElementsByClassName("blogDate")[0].innerHTML = document.getElementsByClassName("diaDate")[0].value;
    document.getElementsByClassName("blogSummary")[0].innerHTML = document.getElementsByClassName("diaSummary")[0].value;
}