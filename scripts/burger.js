let menuBtn = document.querySelector('.burger');
let navigationWindow = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigationWindow.classList.toggle('active');
})



