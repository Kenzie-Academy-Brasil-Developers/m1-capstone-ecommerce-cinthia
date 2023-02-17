let arrItens = [
  {
      imagem: `./img/baodaguerra.png`,
      nome: `Disco - O Bão da Guerra`,
      tipo: `Jogo`,
      preco: 300.00
  },
  {
      imagem: `./img/pleisteixo.png`,
      nome: `Pleisteixo 6`,
      tipo: `Console`,
      preco: 4500.00
  },
  {
      imagem: `./img/punkofop.png`,
      nome: `Punko Fop Liga das Lendas`,
      tipo: `Action Figure`,
      preco: 170.00
  },
  {
      imagem: `./img/verde.png`,
      nome: `Boneco Verde Fofinho`,
      tipo: `Action Figure`,
      preco: 300.00
  },
  {
      imagem: `./img/comida.png`,
      nome: `Boneco Comida de Emergência`,
      tipo: `Action Figure`,
      preco: 250.00
  },
  {
      imagem: `./img/motosserra.png`,
      nome: `Pelúcia Motosserra Man`,
      tipo: `Pelúcia`,
      preco: 100.00
  },
]

let soma = 0
let carrinho = []

let carrinhoElemento = criarCarrinho()


// Remove todos os itens dentro do carrinho.
buttonRemoverTodos.addEventListener(`click`, function () {
  carrinhoElemento.innerHTML = ``;
  carrinho = [];
  somaAside.innerText = `R$ 0,00`;
  soma = 0;
  divListaAside.remove()
  divDentroAside.insertAdjacentElement(`beforeend`, divCarrinhoVazio)
});

atualizarCatalogo(arrItens)

//Filtra com o que foi inserido no input e aparece somente o pesquisado.
inputPesquisa.addEventListener(`input`, function () {
  sectionPrincipal.innerHTML = ``;
  let novosItens = arrItens.filter((arrItens) => arrItens.nome.toLowerCase().includes(inputPesquisa.value.toLowerCase()))
  atualizarCatalogo(novosItens)
})





// Funções divididas do esqueleto (o dinâmico) do código para melhor entendimento.

/**
* Aqui, cria-se um item e seu card para o catálogo, recebendo um array com objetos dentro para renderizá-los.
* @param {*} produto 
* @returns 
*/
function criarItem(produto) {
  let divPrincipal = document.createElement(`div`)
  divPrincipal.classList.add(`div-principal`)

  let divSecundaria1 = document.createElement(`div`)
  divSecundaria1.classList.add(`div-secundaria1`)

  let divSecundaria2 = document.createElement(`div`)
  divSecundaria2.classList.add(`div-secundaria2`)

  sectionPrincipal.appendChild(divPrincipal)

  divPrincipal.appendChild(divSecundaria1)
  divPrincipal.appendChild(divSecundaria2)

  let img = document.createElement(`img`)
  img.src = `${produto.imagem}`
  img.classList.add(`img-item`)

  divSecundaria1.appendChild(img)

  let nomeItem = document.createElement(`p`)
  nomeItem.innerHTML = `${produto.nome}`
  nomeItem.classList.add(`nome-item`)

  let tipoItem = document.createElement(`p`)
  tipoItem.innerHTML = `${produto.tipo}`
  tipoItem.classList.add(`tipo-item`)

  let precoItem = document.createElement(`p`)
  precoItem.innerHTML = `${(produto.preco).toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL` })}`
  precoItem.classList.add(`preco-item`)

  let buttonItem = document.createElement(`button`)
  buttonItem.innerHTML = `Adicionar`
  buttonItem.classList.add(`button-item`)


/**
* Esta função cria carrinhos quando você passa um produto pra ela!!!
* @param {*} produto 
* @returns 
*/
function criarItemCarrinho(produto) {
  let nomeAtual = `${produto.nome}`
  let imagemAtual = `${produto.imagem}`
  let tipoAtual = `${produto.tipo}`


  let newItem = document.createElement(`list`)
  newItem.classList.add(`new-item`)

  let newImage = document.createElement(`img`)
  newImage.src = `${imagemAtual}`
  newImage.classList.add(`new-image`)

  let divParagraph = document.createElement(`div`)
  divParagraph.classList.add(`div-paragraph`)

  let paragraph = document.createElement(`p`)
  paragraph.innerText = `${nomeAtual}`
  paragraph.classList.add(`paragraph`)

  let tipoAnunciado = document.createElement(`p`)
  tipoAnunciado.innerText = `${tipoAtual}`
  tipoAnunciado.classList.add(`tipo-anunciado`)

  let removeButton = createRemoveButton(produto)

  divListaAside.appendChild(carrinhoElemento)
  carrinhoElemento.appendChild(newItem)
  newItem.appendChild(newImage)
  newItem.appendChild(divParagraph)
  divParagraph.appendChild(paragraph)
  divParagraph.appendChild(tipoAnunciado)
  newItem.appendChild(removeButton)
  return newItem
}

  buttonItem.addEventListener(`click`, function () {
      divCarrinhoVazio.remove()
      divDentroAside.insertAdjacentElement(`beforeend`, divListaAside)

      let newItem = criarItemCarrinho(produto)

      carrinho.push(newItem);

      soma += produto.preco
      somaAside.innerText = `${(soma).toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL` })}`

      reloadList();
  });

  let li = document.createElement(`list`)
  li.classList.add(`li`)
  divSecundaria2.appendChild(li)

  li.appendChild(nomeItem)
  li.appendChild(tipoItem)
  li.appendChild(precoItem)
  li.appendChild(buttonItem)
  return buttonItem
}

/**
* Cria a lista do carrinho.
* @returns 
*/
function criarCarrinho() {
  let carrinhoElemento = document.createElement(`list`)
  carrinhoElemento.classList.add(`lista`)
  divListaAside.appendChild(carrinhoElemento)
  return carrinhoElemento
}

/**
* Cria um botão de remoção para o itens que estão no carrinho.
* @param {*} produto 
* @returns 
*/
function createRemoveButton(produto) {
  let precoAdicionado = produto.preco
  const removeButton = document.createElement(`button`);
  removeButton.classList.add(`remove-button`)
  removeButton.innerText = `Remove`;
  removeButton.addEventListener(`click`, (e) => {
      /** Dentro da função, se o index for diferente do que for passado, adiciona à lista do carrinho. Se for igual, remove. */
      carrinho = carrinho.filter((_, index) => index !== Number(e.target.parentNode.id));
      reloadList();
      soma -= precoAdicionado
      somaAside.innerText = `${(soma).toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL` })}`

      if (carrinho.length === 0) {
          divListaAside.remove()
          divDentroAside.insertAdjacentElement(`beforeend`, divCarrinhoVazio)
      }
  });
  return removeButton;
}

/**
 * Recebendo um array de objetos como parâmetro, cria itens de acordo com ele.
 * @param {*} listaRecebida 
 */
function atualizarCatalogo(listaRecebida) {
  for (i = 0; i < listaRecebida.length; i++) {
      criarItem(listaRecebida[i])
  }
}


// Dá reload na lista. Os itens não se repetem ao serem adicionados e removidos.
function reloadList() {
  carrinhoElemento.innerHTML = ``;
  for (let index = 0; index < carrinho.length; index++) {
      let currentElement = carrinho[index];
      currentElement.id = index;
      carrinhoElemento.appendChild(currentElement);
  }
}