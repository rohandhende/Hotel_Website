document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const fullName = event.target[0].value;
    const username = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;
    const message = document.getElementById('message');

   
    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        message.style.color = 'red';
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        message.textContent = `Sign up successful! Welcome, ${fullName}.`;
        message.style.color = 'green';

         setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000); 
    }
});
