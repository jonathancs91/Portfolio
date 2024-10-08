// Obtém o modal e todos os links "Contatos" pela classe
var modal = document.querySelector(".modal");
var openModalLinks = document.querySelectorAll(".openModalLink");

// Abre o modal ao clicar em qualquer link "Contatos"
openModalLinks.forEach(function(link) {
    link.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block"; // Exibe o modal
    }
});

// Fecha o modal ao clicar fora da janela modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Esconde o modal
    }
}