document.addEventListener('DOMContentLoaded', () => {
    initializeNews();
});

function initializeNews() {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        if (index >= 3) {
            card.style.display = 'none';
        }
        const timer = card.getAttribute('data-timer');
        const date = card.getAttribute('data-date');

        card.querySelector('.timer').textContent = timer;
        card.querySelector('.date').textContent = date;
    });
}

let currentNewsIndex = 3;
const newsPerLoad = 3;

function loadMoreNews() {
    const newsCards = document.querySelectorAll('.news-card');
    let newsDisplayed = 0;
    for (let i = currentNewsIndex; i < newsCards.length; i++) {
        if (newsDisplayed >= newsPerLoad) {
            break;
        }
        if (newsCards[i].style.display === 'none') {
            newsCards[i].style.display = 'block';
            newsDisplayed++;
        }
    }
    currentNewsIndex += newsDisplayed;
    if (currentNewsIndex >= newsCards.length) {
        document.querySelector('.load-more').style.display = 'none';
    }
}
