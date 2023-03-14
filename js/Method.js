  function sendRequest()
{
    let time = new Date();
    fetch('https://httpbin.org/post',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recordID: document.getElementById('record').value,
            articleName: document.getElementById('articleName').value,
            articleBody: document.getElementById('articleBody').value,
            date: time
        })
    }).then(response => {
        return response.json()
    }).then(data=> {
        //Taking relevant Data
        document.getElementById('response').value = `Data Placed!:\nRecordID:${data.json.recordID}\nArticle Name:${data.json.articleName}\nArticleBody:${data.json.articleBody}\nDate:${data.json.date}`;
        console.log(data.json);
    })
    .catch(error=> console.log('POST ERROR'))
}

function getRequest()
{
    //Empty body because I don't want any data
    fetch('https://httpbin.org/get')
    .then(response => {
        return response.json()
    }).then(data => {
        document.getElementById('response').value = `This endpoint has no JSON/relevant data so here is your origin:\nOrigin:${data.origin}`;
        console.log(data);
    })
    .catch(error=> console.log('GET ERROR'))
}

function putRequest()
{
    let time = new Date();
    //PUT is supposed to replace duplicates but since time is a value this pretty much never happens
    fetch('https://httpbin.org/put',{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recordID: document.getElementById('record').value,
            articleName: document.getElementById('articleName').value,
            articleBody: document.getElementById('articleBody').value,
            date: time
        })
    }).then(response => {
        return response.json()
    }).then(data => {
        //Taking relevant Data
        document.getElementById('response').value = `Data Placed!:\nRecordID:${data.json.recordID}\nArticle Name:${data.json.articleName}\nArticleBody:${data.json.articleBody}\nDate:${data.json.date}`;
        console.log(data);
    })
    .catch(error=> console.log('GET ERROR'))
}

function deleteRequest()
{
    fetch('https://httpbin.org/delete',{
        method:'DELETE',
    }).then(response => {
        return response.json()
    }).then(data =>{
        document.getElementById('response').value =`There is no data to be printed for delete so here is the origin again, also JSON is null anyways:\nOrigin:${data.origin}`;
        console.log(data);
    })
    .catch(error=> console.log('DELETE ERROR'))
}

window.onload = function()
{
    document.getElementById('postButton').onclick = sendRequest;
    document.getElementById('getButton').onclick = getRequest;
    document.getElementById('putButton').onclick = putRequest;
    document.getElementById('deleteButton').onclick = deleteRequest;
};