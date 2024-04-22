var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function() {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function() {
  body.className = "sign-up-js";
})



document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todos os links das redes sociais
  var socialMediaLinks = document.querySelectorAll(".link-social-media");

  // Adiciona um evento de clique a cada link
  socialMediaLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Previne o comportamento padrão de redirecionamento
      var provider = link.getAttribute("data-provider"); // Obtém o provedor de mídia social
      // Aqui você pode exibir um pop-up de login ou executar a ação desejada
      alert("Faça login usando " + provider); // Exemplo: exibe um alerta com o provedor
    });
  });
});

