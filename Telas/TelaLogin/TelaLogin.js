var form = document.querySelector('.formulario');
var aba = '../TelaInicial/index.html';


function abrirAba() {
    window.open(aba, '_blank');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    abrirAba()
    window.close();
})