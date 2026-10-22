//example 1
const result = fetch("https://jsonplaceholder.typicode.com/posts/1");

console.log(result);

console.log("A");

const result = fetch("https://jsonplaceholder.typicode.com/posts/1");

result.then(function () {
  console.log("B");
  });

  console.log("C");

  // Example 2: Fetching data and chaining .then() to parse JSON
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        return response.json(); // Parses the raw response into a JavaScript object
    })
    .then((data) => {
        console.log("Parsed Todo Data:", data);
    });

// Example 3: Catching errors if the fetch fails (e.g., bad URL or offline)
fetch("https://this-is-an-invalid-url-12345.com")
    .then((response) => {
        console.log("Response received:", response);
    })
    .catch((error) => {
        console.log("Caught an error:", error.message);
    });

// Example 4: Checking if the response is successful (status 200-299)
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Valid Post Title:", data.title);
    })
    .catch((error) => {
        console.log("Error handling failed request:", error);
    });
// Example 5: Clean async/await syntax with try/catch
async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user = await response.json();
        console.log("Fetched user:", user.name);
    } catch (error) {
        console.error("Async/await fetch error:", error.message);
    }
}

fetchUser();

// Example 6: Sending a POST request with payload and headers
async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "My Portfolio Post",
                body: "Learning fetch in JavaScript",
                userId: 1
            })
        });

        const createdData = await response.json();
        console.log("Successfully created:", createdData);
    } catch (error) {
        console.error("POST request failed:", error);
    }
}

createPost();

// Example 7: Using .finally() for cleanup actions
let isLoading = true;

fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => response.json())
    .then((data) => console.log("Todo title:", data.title))
    .catch((error) => console.error("Error:", error))
    .finally(() => {
        isLoading = false;
        console.log("Fetch operation finished. Loading state:", isLoading);
    });
