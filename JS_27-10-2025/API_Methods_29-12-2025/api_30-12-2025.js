// Example: Fetch a random joke from public API
fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        console.log("Joke:", data.setup + " - " + data.punchline);
    })
    .catch(err => console.error(err));


    // Example: Sending data to a fake API
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My Post",
        body: "This is a post created using POST method",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log("Created Post:", data))
.catch(err => console.error(err));


// Example: Update a post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated body content",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log("Updated Post:", data))
.catch(err => console.error(err));

// Example: Delete a post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(() => console.log("Post deleted successfully"))
.catch(err => console.error(err));

async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        console.log("Joke:", data.setup + " - " + data.punchline);
    } catch (error) {
        console.error(error);
    }
}

getJoke();
