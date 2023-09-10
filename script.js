document.addEventListener('DOMContentLoaded', function () {
    const studentForm = document.getElementById('student-form');
    const loginButton = document.getElementById('login-button'); // Add a login button to trigger the login action

    studentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulate a successful login (You would replace this with actual login logic)
        const isLoginSuccessful = true; // Set to true if login is successful, otherwise set to false

        if (isLoginSuccessful) {
            // Redirect to the home page if login is successful
            window.location.href = 'index.html'; // Replace 'home.html' with the actual URL of your home page
        } else {
            // Handle unsuccessful login here, show an error message, etc.
            console.log('Login failed. Please try again.');
        }
    });
    
    // Add an onclick event listener to the login button
    loginButton.addEventListener('click', function () {
        // Simulate a login process (e.g., by checking credentials)
        // Replace the following with your actual login logic
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // For this example, we'll assume successful login if username and password are both "admin"
        if (username === 'admin' && password === 'admin') {
            // Redirect to the home page if login is successful
            window.location.href = 'index.html'; // Replace 'home.html' with the actual URL of your home page
        } else {
            // Handle unsuccessful login here, show an error message, etc.
            console.log('Login failed. Please check your username and password.');
        }
    });
});
