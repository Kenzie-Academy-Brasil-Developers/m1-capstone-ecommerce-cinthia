//Esqueleto fixo do código.

const body = document.querySelector(`body`)

const header = document.createElement(`header`)
header.classList.add(`header`)

const div1 = document.createElement(`div`)
div1.classList.add(`div1`)

const div2 = document.createElement(`div`)
div2.classList.add(`div2`)

const tituloLogo1 = document.createElement(`span`)
tituloLogo1.innerHTML = `GEEKHOUSE`
tituloLogo1.classList.add(`titulo-logo1`)

const tituloLogo2 = document.createElement(`span`)
tituloLogo2.innerHTML = `K`
tituloLogo2.classList.add(`titulo-logo2`)

body.appendChild(header)
header.appendChild(div1)
div1.appendChild(tituloLogo1)
div1.appendChild(tituloLogo2)

const jogos = document.createElement(`a`)
jogos.innerHTML = `Jogos`
jogos.classList.add(`link-header`)
jogos.href = `#jogos`

const consoles = document.createElement(`a`)
consoles.innerHTML = `Videogames`
consoles.classList.add(`link-header`)
consoles.href = `#consoles`

const actionfigures = document.createElement(`a`)
actionfigures.innerHTML = `Action Figures`
actionfigures.classList.add(`link-header`)
actionfigures.href = `#figures`

const pelucias = document.createElement(`a`)
pelucias.innerHTML = `Pelúcias`
pelucias.classList.add(`link-header`)
pelucias.href = `#figures`

header.appendChild(div2)
div2.appendChild(jogos)
div2.appendChild(consoles)
div2.appendChild(actionfigures)
div2.appendChild(pelucias)

const main = document.createElement(`main`)
main.classList.add(`main`)
const sectionPrincipal = document.createElement(`section`)
sectionPrincipal.classList.add(`section-principal`)
const aside = document.createElement(`aside`)
aside.classList.add(`aside`)

body.appendChild(main)
main.appendChild(sectionPrincipal)
main.appendChild(aside)

const divDentroAside = document.createElement(`div`)
divDentroAside.classList.add(`div-dentro-aside`)

const tituloAside = document.createElement(`div`)
tituloAside.classList.add(`titulo-aside`)

const spanTituloAside = document.createElement(`span`)
spanTituloAside.innerHTML = `Carrinho de Compras`
spanTituloAside.classList.add(`span-titulo-aside`)

const divListaAside = document.createElement(`div`)
divListaAside.classList.add(`div-lista-aside`)

const divTotalAside = document.createElement(`div`)
divTotalAside.classList.add(`div-total-aside`)

const buttonRemoverTodos = document.createElement(`button`)
buttonRemoverTodos.classList.add(`button-aside`)
buttonRemoverTodos.innerHTML = `Remover todos`

const inputPesquisa = document.createElement(`input`)
inputPesquisa.classList.add(`input-pesquisa`)
inputPesquisa.placeholder = `Insira sua pesquisa...`
const botaoPesquisa = document.createElement(`button`)
botaoPesquisa.innerHTML = `Pesquisar`
botaoPesquisa.classList.add(`botao-pesquisa`)

const divPesquisa = document.createElement(`div`)
divPesquisa.classList.add(`div-pesquisa`)

const divCarrinhoVazio = document.createElement(`div`)
divCarrinhoVazio.classList.add(`div-carrinho-vazio`)
pCarrinhoVazio1 = document.createElement(`p`)
pCarrinhoVazio1.classList.add(`p-carrinho-vazio1`)
pCarrinhoVazio1.innerHTML = `Carrinho vazio`
pCarrinhoVazio2 = document.createElement(`p`)
pCarrinhoVazio2.classList.add(`p-carrinho-vazio2`)
pCarrinhoVazio2.innerHTML = `Insira itens ao lado`
divCarrinhoVazio.appendChild(pCarrinhoVazio1)
divCarrinhoVazio.appendChild(pCarrinhoVazio2)

aside.appendChild(divDentroAside)
divDentroAside.appendChild(divPesquisa)
divPesquisa.appendChild(inputPesquisa)
divPesquisa.appendChild(botaoPesquisa)

divDentroAside.appendChild(tituloAside)
divDentroAside.appendChild(divCarrinhoVazio)

tituloAside.appendChild(spanTituloAside)

const divExtra = document.createElement(`div`)
divExtra.classList.add(`div-extra`)
aside.appendChild(divExtra)
divExtra.appendChild(divTotalAside)

let pTotalAside = document.createElement("p");
pTotalAside.innerText = `Total:`;
pTotalAside.classList.add(`p-total-aside`);
divTotalAside.appendChild(pTotalAside)

let somaAside = document.createElement("p");
somaAside.innerText = `R$ 0,00`;
somaAside.classList.add(`soma-aside`);
divTotalAside.appendChild(somaAside)

divExtra.appendChild(buttonRemoverTodos)


const divMuitoMassaMesmo = document.createElement("div");