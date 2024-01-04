const hamburguerIcon = document.getElementById('icon');
const sidebar = document.querySelector('ul');

document.addEventListener('click', (e) => {

    if (e.target.closest('#icon') === hamburguerIcon) {
        console.log('Presionaste el botón');
        toggleVisibility();
    }

});

function toggleVisibility() {

    if (sidebar.style.visibility === 'visible') {
        sidebar.style.left = '-300px';
        sidebar.style.visibility = 'hidden';
    }
    else  {
        sidebar.style.left = '0px';
        sidebar.style.visibility = 'visible';
    }

}

