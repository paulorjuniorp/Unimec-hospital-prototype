const btn = document.getElementById("acessibilidade-btn");
const menu = document.getElementById("menu-acessibilidade");
const main = document.querySelector("main");

btn?.addEventListener("click", () => {
  menu?.classList.toggle("oculto");
});

function aumentarFonte() {
  main?.classList.add("aumentar-fonte");
}

function modoAltoContraste() {
  document.body.classList.add("alto-contraste");
}

function resetarAcessibilidade() {
  main?.classList.remove("aumentar-fonte");
  document.body.classList.remove("alto-contraste");
}
