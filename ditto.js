const searchInput = document.getElementById('searchInput');
const clearSearchButton = document.getElementById('clearSearch');

searchInput.addEventListener('input', () => {
    if (searchInput.value) {
        clearSearchButton.style.display = 'inline';
    } else {
        clearSearchButton.style.display = 'none';
    }
});

clearSearchButton.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchButton.style.display = 'none';
    searchInput.focus();
});
$(document).ready(function(){
    $('#animeList').slick({
        infinite: true,
        slidesToShow: 4, // Ajuste este valor para o número de slides que deseja mostrar por vez
        slidesToScroll: 1,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [
            {
                breakpoint: 1024, // Ajusta o número de slides para resoluções de tela específicas
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, // Ajusta o número de slides para resoluções de tela específicas
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Ajusta o número de slides para resoluções de tela específicas
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
let favorites = {
    aki: 0,
    mai: 0,
    antarc: 0
};

function toggleFavorite(event, character) {
    event.stopPropagation(); // Impede que o clique acione a navegação do link
    favorites[character] += 1;
    document.getElementById(`favorites-${character}`).innerText = favorites[character];
}
