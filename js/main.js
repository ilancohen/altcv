window.document.addEventListener('load', setCover);
window.document.addEventListener('resize', setCover);
setCover();

function setCover(){
    var parallax = document.querySelector('.parallax');
    var bg = document.querySelector('.bg');
    bg.style.height = parallax.scrollHeight + 'px';
    bg.style.width = parallax.offsetWidth * 1.5 + 'px';
}

var nav_links = document.querySelectorAll('nav a');
for(var i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener('click', function(event) {\
        event.preventDefault();
        var link = event.target.hash;
        document.querySelector(link).scrollIntoView({
            behavior: 'smooth'
        });
        return false;
    });
}
