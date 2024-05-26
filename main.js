// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('button.info');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.style.backgroundColor = '#00FF00';
            setTimeout(() => {
                e.target.style.backgroundColor = '#000000';
            }, 300);
        });
    });

    const images = document.querySelectorAll('.head-img, .flyer');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.boxShadow = 'none';
        });
    });
});
