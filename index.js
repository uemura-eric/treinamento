class produto {
    nome;
    marca;
    processador;
    armazenamento;
    tela;
}

class preco {
    //valorDeCompra;
    //valorDeVenda;

    constructor(valorDeCompra, valorDeVenda){
        this.valorDeCompra = valorDeCompra;
        this.valorDeVenda = valorDeVenda
    }
}

class entrega {
    constructor(meio, tipo){
        this.meio = meio;
        this.tipo = tipo;
    }
}


const produto1 = new produto();
produto1.nome = "Tablet S8";
produto1.marca = "Samsung";
produto1.processador = "Snapdragon";
produto1.armazenamento = "256gb";
produto1.tela = "OLED";



const precoProduto = new preco();
precoProduto.valorDeCompra = 6000;
precoProduto.valorDeVenda = 7600;

const lucro = precoProduto.valorDeVenda - precoProduto.valorDeCompra;

const precoProduto2 = new preco(8000, 10200);

const pedido1 = new entrega("carro", "rápido")

console.log(precoProduto2);
console.log("O lucro é de " + lucro);
console.log(pedido1);
