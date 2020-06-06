function soma(n1, n2) {
    return (n1 + n2) ;
}

function setReplace(texto, palavra, palavraReplace) {
    return texto.replace(palavra,palavraReplace);
}

console.log(soma(15,28));
console.log(setReplace("Felipe Teste","Teste","Souza"));

function clicou(){
    console.log("Botão foi clicado");
    document.getElementById("h3").innerHTML = "Botão clicado, H3, modificado.";
}

function redirects(){
    window.open("http://globo.com");
    window.location.href = "http://globo.com";
}

function mousein(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
}

function mouseout(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    console.log("Página carregada");
}