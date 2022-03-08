import './less/index.less'

// Your code goes here!
const getImage = document.querySelectorAll('img');
const getNav = document.querySelector('.main-navigation')
const getNavAnchor = getNav.querySelectorAll('a');
const getButtons = document.querySelectorAll('.btn');
const getCopyright = document.querySelector('footer p');

// Navigation events
getNav.style.zIndex = 1;

getNavAnchor.forEach(anchor => {
    anchor.addEventListener('mouseover', () =>{
        anchor.style.color = 'lightblue';
    })
    anchor.addEventListener('mouseleave', () => {
        anchor.style.color = 'black'
    })
    anchor.addEventListener('click', () => {
        if(anchor.textContent === 'Home') {
            alert(`Sorry, can't take you home since you're already here.`)
        }else if(anchor.textContent === 'About Us'){
            const aboutUs = `We're actually Lizard people helping other Lizard people`
            if(confirm(`Are you ready to learn about us?`)){
                alert(aboutUs)
                if(confirm('Learn more?')){
                    open('https://cutt.ly/WOVMAQZ')
                }
            }
        }else if(anchor.textContent === 'Blog'){
            anchor.style.visibility = 'hidden'
        }else if(anchor.textContent === 'Contact'){
            open('https://cutt.ly/cOV0laS')
        }
    })
})

// Images
getImage.forEach(image => {
    image.style.filter = 'blur(5px)';
    image.addEventListener('mouseover', () => {
        image.style.filter = 'none'
    })
    image.addEventListener('mouseleave', () => {
        image.style.filter = 'blur(5px)'
    })
})

// Buttons
getButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'PRAISE THE LIZARD LORD!'
    })
})

getCopyright.addEventListener('mouseover', () => {
    getCopyright.textContent = "Mark Zuckerburg - Lizard King"
})
getCopyright.addEventListener('click', event => {
    event.preventDefault();
})