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
        slidesToScroll: 2,
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

const animes = [
    { title: "Death Note", description: "A high school student discovers a supernatural notebook.", url: "death-note.html" },
    { title: "Soul Eater", description: "Students at the Death Weapon Meister Academy learn to harvest souls.", url: "soul-eater.html" },
    { title: "Chainsaw Man", description: "A young man with the ability to transform parts of his body into chainsaws.", url: "chainsaw-man.html" },
    { title: "Ao no Hako", description: "A high school romance and sports story.", url: "ao-no-hako.html" },
    { title: "Dandadan", description: "A thrilling and action-packed series.", url: "dandadan.html" },
    { title: "Horimiya", description: "A sweet romantic comedy about high school life and friendships.", url: "horimiya.html" },
    { title: "Bocchi the Rock!", description: "A music-themed story about overcoming anxiety and making friends.", url: "bocchi-the-rock.html" },
    { title: "Sousou no Frieren", description: "A fantasy tale about the journey of a mage after the defeat of the demon king.", url: "sousou-no-frieren.html" },
    { title: "Kaguya-sama: Love is War", description: "A hilarious battle of wits between two high school geniuses in love.", url: "kaguya-sama-love-is-war.html" },
    { title: "Code Geass: Lelouch of the Rebellion", description: "A gripping story of rebellion and mecha warfare led by a brilliant strategist.", url: "code-geass.html" }
];

document.getElementById('searchInput').addEventListener('input', searchAnime);
document.getElementById('searchInput').addEventListener('blur', () => {
    setTimeout(hideResults, 200);
}); // Adiciona atraso no evento de perda de foco

function searchAnime() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    
    resultsContainer.innerHTML = '';
    if (input.trim().length > 0) {
        const filteredAnimes = animes.filter(anime => anime.title.toLowerCase().includes(input));
        
        if (filteredAnimes.length > 0) {
            resultsContainer.style.display = 'block';
            filteredAnimes.forEach(anime => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `<strong>${anime.title}</strong><br><small>${anime.description}</small>`;
                resultItem.addEventListener('click', function() {
                    window.location.href = anime.url;
                });
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

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('profile-name').textContent = loggedInUser.username;
    } else {
        document.getElementById('profile-name').textContent = 'Usuário não logado';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado');

    // Verificar se o item 'loggedInUser' está no localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log('Usuário logado:', loggedInUser);

    if (loggedInUser) {
        const profileGreetingElement = document.getElementById('profile-greeting');
        
        // Verificar se o elemento existe
        if (profileGreetingElement) {
            profileGreetingElement.textContent = `Hello, ${loggedInUser.username}!`;
            console.log('Mensagem de saudação exibida:', `Hello, ${loggedInUser.username}!`);
        } else {
            console.error('Elemento com ID "profile-greeting" não encontrado');
        }
    } else {
        console.error('Nenhum usuário logado encontrado no localStorage');
        const profileGreetingElement = document.getElementById('profile-greeting');
        
        // Verificar se o elemento existe
        if (profileGreetingElement) {
            profileGreetingElement.textContent = 'Hello, Guest!';
        }
    }
});

$(document).ready(function() {
    $('#publication-status').select2({
        placeholder: "Selecione o status",
        allowClear: true
    });
});
