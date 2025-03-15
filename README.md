
# Challenge Amigo Secreto Alura




O Challenge da trilha de iniciante em programação do Oracle One consiste em desenvolver um Amigo secreto, no qual você coloca seus inputs e no final o amigo sorteado é mostrado na tela. 




## Lógica por trás do site

Você insere o nome no campo de input, clicka no botão de adicionar e faz isso até a quantidade amigos necessária. Cada nome será armazenado no array:

```javascript
let amigosSecretos = [];
```

A função que adiciona os elementos no array: 

```javascript
let amigosSecretos = [];
function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    amigosSecretos.push(nomeAmigo);
    document.querySelector('input').value = '';
    atualizarListaAmigos();
    console.log(amigosSecretos);
  }
```

Após adicionar os amigos no array, foi pedido que mostrasse na tela os elementos adicionados. Para isto, basta manipular o DOM e criar li's com os elementos do array: 

```javascript
function atualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    amigosSecretos.forEach(amigo => {
      let li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });
  }
  ```

  E por final, sortear os amigos. Utilizando o math.random você consegue aleatóriamente escolher um elemento dentro do array e mostrar na tela: 

```javascript
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
  ```
