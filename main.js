const hamburgerDiv = document.querySelector('.hamburger')
let isOpened
const nav = document.querySelector('#menu')

hamburgerDiv.addEventListener('click', toggleIcon)

function toggleIcon(){
    isOpened = this.dataset.open
    let icon = this.querySelector('img')
    if (isOpened === 'false'){
        icon.src =  './project-files/images/icon-close.svg'     
        this.dataset.open = 'true'    
        this.style.scale = 0.99
    }
    else{
        icon.src = './project-files/images/icon-hamburger.svg'
        this.style.scale = 1
        this.dataset.open = 'false'
    }
    nav.classList.toggle('hidden')
}