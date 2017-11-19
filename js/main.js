window.document.addEventListener('load', function(){
    setHeight();
});
setHeight();

function setHeight(){
    document.querySelector('.bg').style.height = document.querySelector('.parallax').scrollHeight + 'px';
}
