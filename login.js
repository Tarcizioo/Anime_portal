document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const createAccountButton = document.getElementById('createAccountButton');

    if (createAccountButton) {
        createAccountButton.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    } else {
        console.error("Elemento com ID 'createAccountButton' não encontrado.");
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            const userData = JSON.parse(localStorage.getItem('user'));

            if (userData && username === userData.username && password === userData.password) {
                localStorage.setItem('loggedInUser', JSON.stringify(userData));
                window.location.href = 'ditto.html';
            } else {
                errorMessage.textContent = 'Nome de usuário ou senha incorretos!';
            }
        });
    } else {
        console.error("Elemento com ID 'loginForm' não encontrado.");
    }
});
