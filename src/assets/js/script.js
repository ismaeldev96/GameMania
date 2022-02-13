// Botão para ativar o menu hamburguer 
const btnMenu = document.getElementById('btnMenu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('activeMenu');
}
btnMenu.addEventListener('click', toggleMenu);

// recuperar valor do campo  busca desk
const btnBuscardor = document.getElementById('btnBuscar');
const inputBuscarProduto = document.getElementById('inputBuscarProduto');
btnBuscardor.addEventListener('click', pesquisar);
function pesquisar(){
    const conteudoCampo = inputBuscarProduto.value;
    if (conteudoCampo == "") {
        
    }else{
    console.log(conteudoCampo);
    inputBuscarProduto.value = "";
    }
}
// recuperar valor do campo busca mobile
const btnBuscardorMobile = document.getElementById('btnBuscarMobile');
const inputBuscarProdutoMobile = document.getElementById('inputBuscarProdutoMobile');
btnBuscardorMobile.addEventListener('click', pesquisarMobile);
function pesquisarMobile(){
    const conteudoCampoMobile = inputBuscarProdutoMobile.value;
    if (conteudoCampoMobile == "") {
        
    }else{
    console.log(conteudoCampoMobile);
    inputBuscarProdutoMobile.value = "";
    }
}

// Rendeização dos Produtos
let produtos = [
    {
        nome:"",
        estrela:"",
        imagem:"",
        preco:"",
        desconto:""
    },

]

function rederizarProdutos(){

    
    let cardProdutos = `
    <div class="cardProduto">
    <header>
    <div class="cardProdutoClassificacao">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
    <i class="far fa-star"></i>
    </div>
    <img src="./assets/img/cad-foto.jpg" alt="">
    </header>
    <div>
    <div class="cardProdutoInfo">
    <h3 class="produto_titulo">Processador Intel Core i7-9700F, Cache 12MB....</h2>
    <span class="txt-thr">De: R$ 2.000,00</span>
    <strong>Por: R$ 1.500,00</strong>
    <span>a vista ou no boleto</span>
    </div>
    <a class="btnPagamento" href="produto.html"><div>Comprar</div><i class="fas fa-shopping-cart"></i></a>
    </div>
    </div>`;
    
}