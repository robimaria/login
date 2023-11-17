// Simulate user authentication
let isAuthenticated = false;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate authentication logic (replace with actual authentication)
    if (username === 'admin' && password === 'password') {
        isAuthenticated = true;
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function checkAuthentication() {
    // Check if the user is authenticated
    if (!isAuthenticated) {
        window.location.href = 'index.html';
    }
}

function logout() {
    isAuthenticated = false;
    window.location.href = 'index.html';
}

// Check authentication status when loading the dashboard
document.addEventListener('DOMContentLoaded', checkAuthentication);
