let botaoAtivaAnimacao = document.querySelector('.botaoCadastrarTag');
let animacao = document.querySelector('.list-tags');

botaoAtivaAnimacao.addEventListener('click', () => {
    animacao.style.display = 'flex';
})