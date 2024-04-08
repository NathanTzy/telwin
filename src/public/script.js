const btnReadMore = document.querySelector('.btn-read-more');
const readMoreContent = document.querySelector('.read-more');

btnReadMore.addEventListener('click', () => {
    readMoreContent.classList.toggle('active');
    if (readMoreContent.classList.contains('active')) {
        btnReadMore.textContent = 'Close';
    } else {
        btnReadMore.textContent = 'Read More';
    }
});

const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
const btns = document.querySelectorAll('.btn');

function reset() {
    for (let i = 0; i < items.length; i++) {
        btns[i].classList.remove('expand');
        items[i].classList.remove('animation');
    }
}

function animate(i) {
    btns[i].classList.add('expand');
    items[i].classList.add('animation');
}

function scrollTo(i) {
    slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
    reset();
    animate(i);
}

const activate = (e) => e.target.matches('.btn') && scrollTo(e.target.dataset.index);

const init = () => animate(0);

window.addEventListener('load', init, false);
window.addEventListener('click', activate, false);