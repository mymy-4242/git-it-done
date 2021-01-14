var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function(Response) {
        //request was successful
        if(Response.ok) {
            Response.json().then(function(data) {
                console.log(data);
            });
        }
        else {
            alert("There was a problem with your request!");
        }
    });
};

getRepoIssues("facebook/react");