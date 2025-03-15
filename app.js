//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigosSecretos = [];
let botaoAdicionar = document.querySelector('#button-add');
let botaoSortear = document.querySelector('#button-sortear');



function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    amigosSecretos.push(nomeAmigo);
    document.querySelector('input').value = '';
    atualizarListaAmigos();
    console.log(amigosSecretos);
  }
  
  function atualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    amigosSecretos.forEach(amigo => {
      let li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });
  }
  
  function sortearAmigo() {
    if (amigosSecretos.length === 0) {
      alert('Adicione amigos antes de sortear!');
      return;
    }
    let amigoSorteado = Math.floor(Math.random() * amigosSecretos.length);
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigosSecretos[amigoSorteado]}`;
    console.log(amigosSecretos[amigoSorteado]);
  }

