document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username && password) {
        // Armazenar dados do usuário no localStorage
        const userData = {
            username: username,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = 'index.html'; // Redireciona para a página de login
    } else {
        errorMessage.textContent = 'Por favor, preencha todos os campos!';
    }
});
