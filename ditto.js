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
        slidesToShow: 5, // Ajuste este valor para o número de slides que deseja mostrar por vez
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
}

function toggleFavorite(event, character) {
    event.stopPropagation(); // Impede que o clique acione a navegação do link
    favorites[character] += 1;
    document.getElementById(`favorites-${character}`).innerText = favorites[character];
}

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Evento 1',
                start: '2024-11-23',
            },
            {
                title: 'Evento 2',
                start: '2024-11-25',
                end: '2024-11-27'
            }
        ]
    });
    calendar.render();
});

const animes = [
    { title: "Death Note", description: "A high school student discovers a supernatural notebook.", url: "death-note.html" },
    { title: "Soul Eater", description: "Students at the Death Weapon Meister Academy learn to harvest souls.", url: "soul-eater.html" },
    { title: "Chainsaw Man", description: "A young man with the ability to transform parts of his body into chainsaws.", url: "chainsaw-man.html" },
    { title: "Ao no Hako", description: "A high school romance and sports story.", url: "ao-no-hako.html" },
    { title: "Dandadan", description: "A thrilling and action-packed series.", url: "dandadan.html" }
];

document.getElementById('searchInput').addEventListener('input', searchAnime);
document.getElementById('searchInput').addEventListener('blur', hideResults); // Adiciona evento de perda de foco

function searchAnime() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    
    resultsContainer.innerHTML = '';
    if (input.trim().length > 0) {  // Verifica se há texto no campo de pesquisa
        const filteredAnimes = animes.filter(anime => anime.title.toLowerCase().includes(input));
        
        if (filteredAnimes.length > 0) {
            resultsContainer.style.display = 'block';
            filteredAnimes.forEach(anime => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `<strong>${anime.title}</strong><br><small>${anime.description}</small>`;
                resultItem.onclick = () => window.location.href = anime.url;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = '<div class="result-item">No results found</div>';
        }
    } else {
        resultsContainer.style.display = 'none';
    }
}

function hideResults() {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.style.display = 'none';
}
