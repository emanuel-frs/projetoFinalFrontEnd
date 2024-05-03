function mostrarConteudo(id) {
    var conteudos = document.querySelectorAll('.conteudo');
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove('mostrar');
}
    var conteudoSelecionado = document.getElementById(id);
    conteudoSelecionado.classList.add('mostrar');

}
window.onload = function() {
    mostrarConteudo('centroVisitantes');
};