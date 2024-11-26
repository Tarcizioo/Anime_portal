document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação simples (substitua isso pela lógica de autenticação real)
    if (username === 'Tarcizio' && password === '12345') {
        window.location.href = 'pagina-principal.html'; // Redireciona para a página principal
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha incorretos!';
    }
});
