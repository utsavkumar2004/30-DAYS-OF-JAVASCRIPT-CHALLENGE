document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example check - replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('loggedInUser', JSON.stringify({username}));
        alert('Logged in successfully');
    } else {
        alert('Invalid credentials');
    }
});
let posts = [];

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const content = document.getElementById('postContent').value;
    const image = document.getElementById('postImage').files[0];

    let newPost = {
        content,
        image,
        username: localStorage.getItem('loggedInUser'),
        timestamp: new Date().toISOString()
    };

    posts.push(newPost);
    displayPosts();
});
function displayPosts() {
    const postContainer = document.createElement('div');
    postContainer.className = 'posts';
    document.body.appendChild(postContainer);

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <p>${post.content}</p>
            <img src="${URL.createObjectURL(post.image)}" alt="Post Image">
            <span>${post.username}</span>
            <small>${post.timestamp}</small>
        `;
        postContainer.appendChild(postElement);
    });
}
// Inside the displayPosts function, after creating the post element
const likeButton = document.createElement('button');
likeButton.textContent = 'Like';
postElement.appendChild(likeButton);

const commentButton = document.createElement('button');
commentButton.textContent = 'Comment';
postElement.appendChild(commentButton);
// After displaying posts
document.querySelectorAll('.post button').forEach(button => {
    button.addEventListener('click', function(event) {
        console.log(`Clicked ${event.target.textContent}`);
    });
});
if (post.username === localStorage.getItem('loggedInUser')) {
    postElement.style.backgroundColor = '#f0f0f0';
}
