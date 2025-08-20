'use strict'
import produtos from './produtos_atualizados.json' with {type: "json"}
const carrossel = document.getElementById('carrossel')

function criarCard(srcProduto){
    //Iniciando elementos
    const productCard = document.createElement('article')
    const categoryLabel = document.createElement('span')
    const productImg = document.createElement('img')
    const productName = document.createElement('span')
    const productPrice = document.createElement('span')
    const priceParcela = document.createElement('span') //TODO: Quero incluir o calculo desse
    const buyButton = document.createElement('button')

    //atribuindo classes
    productCard.classList.add('product-card')
    categoryLabel.classList.add('category-label')
    productName.classList.add('product-name')
    productPrice.classList.add('product-price')
    priceParcela.classList.add('price-parcela')

    //Importando conteudo

    categoryLabel.textContent = `QUINZENA GAMER`
    productImg.src = `./img/${srcProduto.imagem}`
    productName.textContent = srcProduto.nome
    productPrice.textContent = `R$${srcProduto.preco}`
    priceParcela.textContent = `À vista no PIX ou até 10x de R$${(srcProduto.preco/10).toFixed(2)}`
    buyButton.textContent = 'COMPRAR'
    //Append
    carrossel.appendChild(productCard)
    productCard.appendChild(categoryLabel)
    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productPrice)
    productCard.appendChild(priceParcela)
    productCard.appendChild(buyButton)
}

function loadProducts(){
    produtos.forEach(criarCard)
}

loadProducts()