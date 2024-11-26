document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const profilePicture = document.getElementById('profilePicture').files[0];
            const errorMessage = document.getElementById('error-message');

            if (username && password) {
                const reader = new FileReader();
                reader.onloadend = function() {
                    const userData = {
                        username: username,
                        password: password,
                        profilePicture: reader.result,
                    };
                    localStorage.setItem('user', JSON.stringify(userData));
                    window.location.href = 'index.html';
                };
                if (profilePicture) {
                    reader.readAsDataURL(profilePicture);
                } else {
                    localStorage.setItem(
                        'user',
                        JSON.stringify({
                            username: username,
                            password: password,
                            profilePicture: null,
                        })
                    );
                    window.location.href = 'index.html';
                }
            } else {
                errorMessage.textContent = 'Por favor, preencha todos os campos!';
            }
        });
    } else {
        console.error("Elemento com ID 'registerForm' não encontrado.");
    }
});
