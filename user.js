        const editProfileBtn = document.getElementById('editProfileBtn');
        const editProfileModal = document.getElementById('editProfileModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        const usernameDisplay = document.getElementById('usernameDisplay');
        const usernameInput = document.getElementById('usernameInput');
        const emailInput = document.getElementById('emailInput');
        const avatarInput = document.getElementById('avatarInput');
        const userAvatar = document.getElementById('userAvatar');
        const bannerInput = document.getElementById('bannerInput');
        const userBanner = document.getElementById('userBanner');
        const cropperModal = document.getElementById('cropperModal');
        const overlay = document.getElementById('overlay');
        const imageToCrop = document.getElementById('imageToCrop');
        let cropper;
        
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

            if (bannerInput.files && bannerInput.files[0]){
                const reader = new FileReader();
                reader.onload = (e) => {
                    userBanner.src = e.target.result;
                };
                reader.readAsDataURL(bannerInput.files[0]);
            }

            editProfileModal.classList.remove('show');
            
        });
        document.getElementById('home').addEventListener('click', function() {
            window.location.href = 'home.html';
        });
        
        document.getElementById('most-popular').addEventListener('click', function() {
            window.location.href = 'most-popular.html';
        });
        
        document.getElementById('best-characters').addEventListener('click', function() {
            window.location.href = 'best-characters.html';
        });
        
        document.getElementById('releases').addEventListener('click', function() {
            window.location.href = 'releases.html';
        });
        
        document.getElementById('settings').addEventListener('click', function() {
            window.location.href = 'settings.html';
        });
        
        document.getElementById('user').addEventListener('click', function() {
            window.location.href = 'user.html';
        });
        
        document.getElementById('logout').addEventListener('click', function() {
            window.location.href = 'index.html';
        });