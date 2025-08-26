'use strict'
import produtos from './produtos_atualizados.json' with {type: "json"}
const carrossel = document.getElementById('carrossel')

function criarCard(srcProduto){
    //Iniciando elementos
    const productCard = document.createElement('article')
    const tagRating = document.createElement('div')
    const categoryLabel = document.createElement('span')
    const ratingDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productName = document.createElement('span')
    const productPrice = document.createElement('span')
    const priceParcela = document.createElement('span') //TODO: Quero incluir o calculo desse
    const buyButton = document.createElement('button')

    //atribuindo classes
    productCard.classList.add('product-card')
    tagRating.classList.add('tag-rating')
    categoryLabel.classList.add('category-label')
    ratingDiv.classList.add('rating')
    productName.classList.add('product-name')
    productPrice.classList.add('product-price')
    priceParcela.classList.add('price-parcela')

    //Importando conteudo

    categoryLabel.textContent = srcProduto.categoria.toUpperCase()
    loadStars(srcProduto.classificacao, ratingDiv)
    productImg.src = `./img/${srcProduto.imagem}`
    productName.textContent = srcProduto.nome
    productPrice.textContent = `R$${srcProduto.preco}`
    priceParcela.textContent = `À vista no PIX ou até 10x de R$${(srcProduto.preco/10).toFixed(2)}`
    buyButton.textContent = 'COMPRAR'
    //Append
    carrossel.appendChild(productCard)
    productCard.appendChild(tagRating)
    tagRating.appendChild(categoryLabel)
    tagRating.appendChild(ratingDiv)
    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productPrice)
    productCard.appendChild(priceParcela)
    productCard.appendChild(buyButton)
}

function loadStars(classificacao, ratingDiv){
    for (let i = 0 ; i <5 ; i++){
        const imgStar = document.createElement('img')
        if (classificacao >=1){
            imgStar.src = `./imgLayout/star-filled.png`
            classificacao--
        }
        else{
            imgStar.src = `./imgLayout/star-stroke.png`
        }
            ratingDiv.appendChild(imgStar)
    }

}

function loadProducts(){
    produtos.forEach(criarCard)
}

loadProducts()