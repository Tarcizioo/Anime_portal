document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const errorMessage = document.getElementById('error-message');

    if (username && password) {
        // Armazenar dados do usuário no localStorage
        const reader = new FileReader();
        reader.onloadend = function() {
            const userData = {
                username: username,
                password: password,
                profilePicture: reader.result
            };
            localStorage.setItem('user', JSON.stringify(userData));
            window.location.href = 'index.html'; // Redireciona para a página de login
        };
        if (profilePicture) {
            reader.readAsDataURL(profilePicture);
        } else {
            const userData = {
                username: username,
                password: password,
                profilePicture: null
            };
            localStorage.setItem('user', JSON.stringify(userData));
            window.location.href = 'index.html'; // Redireciona para a página de login
        }
    } else {
        errorMessage.textContent = 'Por favor, preencha todos os campos!';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Recuperar dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && username === userData.username && password === userData.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
        window.location.href = 'ditto.html'; // Redireciona para a página principal
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha incorretos!';
    }
});

// Exibição do nome de usuário e foto de perfil na página principal
window.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('profile-name').textContent = loggedInUser.username;
        if (loggedInUser.profilePicture) {
            document.getElementById('profile-picture').src = loggedInUser.profilePicture;
        }
    }
});
