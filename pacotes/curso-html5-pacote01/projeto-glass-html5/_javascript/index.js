var headerimg = ["_imagens/home.png", "_imagens/especificacoes.png", "_imagens/fotos.png", "_imagens/multimidia.png", "_imagens/contato.png", "_imagens/glass-oculos-preto-peq.png"]
var novaimg = window.document.querySelector(".menuimg")

function changeImg(type){
   novaimg.src = headerimg[type];
}

/* window.document.getElementById("home").addEventListener("mousemove", changeImg(0));
window.document.getElementById("home").addEventListener("mouseout", voltaImg);*/
