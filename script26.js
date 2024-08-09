// WebSocket Server (server.js)
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');

// Client-side JavaScript (script26.js)
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', (event) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = event.data;
    document.getElementById('chat-window').appendChild(messageElement);
});

socket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
});

let username = '';

document.getElementById('username-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        username = event.target.value;
        event.target.style.display = 'none';
        document.getElementById('message-input').focus();
    }
});

function sendMessage(message) {
    if (username) {
        const fullMessage = `${username}: ${message}`;
        socket.send(fullMessage);

        const myMessageElement = document.createElement('div');
        myMessageElement.classList.add('my-message');
        myMessageElement.textContent = fullMessage;
        document.getElementById('chat-window').appendChild(myMessageElement);

        document.getElementById('message-input').value = '';
    } else {
        alert('Please enter a username.');
    }
}

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    sendMessage(message);
});

document.getElementById('message-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const message = document.getElementById('message-input').value;
        sendMessage(message);
    }
});
