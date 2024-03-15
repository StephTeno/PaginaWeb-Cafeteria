/* Hacer la responsividad del NavBar*/
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdown = document.querySelector('.hero__navBar__dropdown');

toggleBtn.addEventListener("click", function(){
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fas fa-xmark'
    : 'fas fa-bars'
})
