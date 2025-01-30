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
        const cropButton = document.getElementById('cropButton');
        let cropper, currentImageType;

        
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

            editProfileModal.classList.remove('show');
});

function openCropperModal(imageFile, type) {
    currentImageType = type;
    const reader = new FileReader();

    reader.onload = (e) => {
        imageToCrop.src = e.target.result;
        cropperModal.classList.add('show');
        overlay.classList.add('show');

        if (cropper) {
            cropper.destroy();
        }
        
        cropper = new Cropper(imageToCrop, {
            aspectRatio: type === 'avatar' ? 1 : 10 / 2,
            viewMode: 2,
        });
    };

    reader.readAsDataURL(imageFile);
}

avatarInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        openCropperModal(e.target.files[0], 'avatar');
    }
});

bannerInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        openCropperModal(e.target.files[0], 'banner');
    }
});

cropButton.addEventListener('click', () => {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        const croppedImage = canvas.toDataURL();

        if (currentImageType === 'avatar') {
            userAvatar.src = croppedImage;
        } else {
            userBanner.src = croppedImage;
        }

        cropperModal.classList.remove('show');
        overlay.classList.remove('show');
    }
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