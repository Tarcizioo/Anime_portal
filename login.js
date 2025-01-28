document.getElementById('createAccountButton').addEventListener('click', function() {
    window.location.href = 'register.html'; // Redireciona para a página de registro
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
        window.location.href = 'home.html'; // Redireciona para a página principal
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha incorretos!';
    }
});
