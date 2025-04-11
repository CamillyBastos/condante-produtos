

var produtos = [
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "Nike air Max 90",
        descrica: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco: "R$ 899,00",

    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "Air Max 1",
        descrica: "Conheça o líder do bando. Caminhando sobre as nuvens acima do ruído, o Air Max 1 combina design atemporal com conforto acolchoado",
        preco: "R$ 712,49",

    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "Lebron 22",
        descrica: "Também é comum na rotação de LeBron. Este design especial presta homenagem ao seu tom oficialmente não oficial.",
        preco: "R$ 1599,99",

    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "Tênis Nike Cortez Masculino",
        descrica: "Esta edição de nylon e camurça apresenta uma área mais larga para os dedos e painéis laterais mais firmes",
        preco: "R$ 617,49 ",

    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "LeBron NXXT Genisus",
        descrica: "Com malha leve e de suporte e amortecimento Air Zoom flexível para velocidade em todos os jogos",
        preco: "R$ 1299,99",

    },
]

var divProdutos = document.querySelector(".produtos")

for (var i = 0; i < produtos.length; i++) {
    divProdutos.innerHTML += `<div class="produtos">
            <div class="card">
                <img src="${produtos[i].imagem}" alt="#">
                <div class="content">
                    <div class="title">
                        <h2>${produtos[i].titulo}</h2>
                        <p>${produtos[i].descrica}</p>
                    </div>
                    <div class="btns">
                        <p>${produtos[i].preco}</p>
                        <button>Comprar agora</button>
                    </div>
                    <div class="freight">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Frete grátis para todo o Brasil</p>
                    </div> 
                </div>  
            </div>
        </div>`

}