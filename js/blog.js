//All variables required
const blogCreate = document.getElementById("postCreate");
blogCreate.addEventListener("click", createBlogPost);

//Creates the blog post
function createBlogPost()
{
    //Pop up form to fill in things about said post
    //W3School Code example for html template
    //Simply gets the template -> creates a clone -> adds clone to document (Always [0] here for create)
    var temp = document.getElementsByClassName("templateBlog")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}