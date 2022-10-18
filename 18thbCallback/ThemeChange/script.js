var navbarToggle=document.getElementById('navbarToggle')
var h1=document.getElementById('h1')
var card=document.getElementById('card')
var card1=document.getElementById('card1')
function changeTheme(){
    console.log("changeTheme")
    document.body.classList.toggle('bg-dark')
    navbarToggle.classList.toggle('bg-dark')
    navbarToggle.classList.toggle('navbar-dark')
    h1.classList.toggle('text-light')
    card.classList.toggle('bg-dark')
    card.classList.toggle('text-light')
    card.classList.toggle('border')
    
    card1.classList.toggle('bg-dark')
    card1.classList.toggle('text-light')
    card1.classList.toggle('border')

    
}