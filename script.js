const navLinks = document.getElementById('navLinks')
const burguer = document.getElementById('burguer')

burguer.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})