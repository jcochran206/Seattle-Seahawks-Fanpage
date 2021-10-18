//scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log('window', window.scrollY);
    console.log('offset', nav.offsetHeight);
    if(window.scrollY > nav.offsetHeight - 100){
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}


//obtain team status
//function loop players data
//function to calculate win percentage
