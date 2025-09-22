const url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
    .then(response => response.json()) // parse JSON from response
    .then(data => {
        console.log("User Data:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });
