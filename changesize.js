var outerContainer = document.getElementById('changeWidth');

var btnChange = document.getElementById('Changer');

btnChange.addEventListener('click', changeLayout);

function changeLayout() {

        outerContainer.classList.toggle('changeSection');

    
}