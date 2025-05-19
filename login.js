document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;
    const message = document.getElementById('message');
    const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

   

    if (username === savedUsername && password === savedPassword) {
    
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);

    } else {
        
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', function() {
        options.forEach(opt => opt.classList.remove('clicked')); 
        this.classList.add('clicked'); 
    });
});
