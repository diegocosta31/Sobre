//Elementos
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Remove a classe "active" dos botões
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // Adiciona no botão clicado
    e.target.classList.add("active");
    // Remove a classe "active" dos artigos
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // Adiciona a classe "active" ao artigo com id igual ao data-id do botão
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
