let palavra = prompt("Digite uma palavra qualquer: ");

 let letrasDaPalavra = palavra.split('');

// função para randomizar as letras da palavra digitada
let embaralhar = (letras) => {
  
  //lopp em todas as letras da palavra
  for (let i = letras.length - 1; i > 0; i--) {
    // escolhendo uma letra aleatória
    const j = Math.floor(Math.random() * (i + 1));
    // reposicionando as letras
    [letras[i], letras[j]] = [letras[j], letras[i]];
  }

  // retornando a palvra embaralhada
  return letras;
}

// imprime a palavra embaralhada no parágrafo com id "palavra_embaralhada".
document.getElementById("palavra_embaralhada").innerHTML = embaralhar(letrasDaPalavra);

// selciona o botão Enviar
const btnEnviar = document.querySelector("#enviar");


btnEnviar.addEventListener("click", function(nEnviar){
  // comando para fazer o botão enviar não enviar o texto ao clicar
  nEnviar.preventDefault();
  // seleciona o input com id name
  const texto = document.querySelector("#name");

  // compara o valora digitado no input com o valor digitado no prompt
  if (texto.value.toLowerCase() == palavra.toLowerCase()){
    document.getElementById("resposta").innerHTML ="Parabéns, Você desembaralhou a palavra corretamente!";
    document.getElementById("resposta").style.color = "green";
} else{
    document.getElementById("resposta").innerHTML ="Que Pena! Você não desembaralhou a palavra corretamente.";
    document.getElementById("resposta").style.color = "red";
}
});


