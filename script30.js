// Example notification object
function Notification(id, type, timestamp, content, userId) {
    this.id = id;
    this.type = type;
    this.timestamp = timestamp;
    this.content = content;
    this.userId = userId;
}

// Array to hold all notifications
let notifications = [];

// Function to generate a new notification
function generateNotification(type, content, userId) {
    let now = new Date();
    let id = Math.random().toString(36).substring(2);
    let notification = new Notification(id, type, now, content, userId);
    notifications.push(notification);
    // Here you would also call a function to display the notification
}

// Function to display notifications
function displayNotifications() {
    const notificationsSidebar = document.getElementById('notificationsSidebar');
    notifications.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.textContent = `${notification.type}: ${notification.content} - ${notification.timestamp}`;
        notificationsSidebar.appendChild(notificationElement);
    });
}
