const navLinks = document.getElementById('navLinks')
const links = document.querySelectorAll('.links')
const burguer = document.getElementById('burguer')

burguer.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

links.forEach(link => { // função para fechar menu
    link.addEventListener('click', () => {
        navLinks.classList.remove('active')
    })
})