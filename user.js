const editProfileBtn = document.getElementById('editProfileBtn');
        const editProfileModal = document.getElementById('editProfileModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        const usernameDisplay = document.getElementById('usernameDisplay');
        const usernameInput = document.getElementById('usernameInput');
        const emailInput = document.getElementById('emailInput');
        const avatarInput = document.getElementById('avatarInput');
        const userAvatar = document.getElementById('userAvatar');

        editProfileBtn.addEventListener('click', () => {
            editProfileModal.classList.add('show');
        });

        closeModalBtn.addEventListener('click', () => {
            editProfileModal.classList.remove('show');
        });

        window.addEventListener('click', (e) => {
            if (e.target === editProfileModal) {
                editProfileModal.classList.remove('show');
            }
        });

        saveProfileBtn.addEventListener('click', () => {
            if (usernameInput.value) {
                usernameDisplay.textContent = usernameInput.value;
            }

            if (avatarInput.files && avatarInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    userAvatar.src = e.target.result;
                };
                reader.readAsDataURL(avatarInput.files[0]);
            }

            editProfileModal.classList.remove('show');
        });
