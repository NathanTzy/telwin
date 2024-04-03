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
