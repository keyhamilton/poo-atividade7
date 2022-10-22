import { Veiculo, Carro, CarroEletrico } from "./questao1";

import { Calculadora } from "./questao2"
import { CalculadoraCientífica } from "./questao3";
import { Estoque, Produto, ProdutoPerecivel } from "./questao5";

// inicio dos testes da questão 1;
let veiculo: Veiculo = new Veiculo('xtx21g49', 2021);
let carro: Veiculo = new Carro('lzt21d89', 2020, 'minivan');
let carroEletrico: Carro = new CarroEletrico('hgs45b29', 2022, 'sedã', 520);

console.log('Questão 1');
console.log(`${'-'.repeat(80)}`);

console.log(veiculo);
console.log(carro);
console.log(carroEletrico);

console.log(`${'-'.repeat(80)}`);
console.log();


// inicio dos testes da questão 2;
console.log('Questão 2');
console.log(`${'-'.repeat(80)}`);


let calculadora: Calculadora = new Calculadora(2, 3);
let soma = calculadora.somar();
console.log(`Soma: ${soma}`);

console.log(`${'-'.repeat(80)}`);
console.log();

// inicio da questão 3
console.log('Questão 3');
console.log(`${'-'.repeat(80)}`);

let calculadoraCientifica: CalculadoraCientífica = new CalculadoraCientífica(3, 2);
let potencia = calculadoraCientifica.exponenciar();
console.log(`Potênciação: ${potencia}`);

console.log(`${'-'.repeat(80)}`);

// inicio questão 5

var produtos: Produto[] = [new Produto('5', 'sabão', 50, 2.5), 
                           new ProdutoPerecivel('6', 'macarrão', 16, 5.20, '2022-10-12'),
                           new ProdutoPerecivel('8', 'biscoito', 18, 4.80, '2020-12-26')];


let p: Produto = new Produto('1', 'nescau', 20, 4);
let p2: Produto = new ProdutoPerecivel('2', 'queijo', 50, 20, '2022-10-25');
let p3: ProdutoPerecivel = new ProdutoPerecivel('3', 'margarina', 5, 6, '2022-10-12');

let estoque: Estoque = new Estoque(produtos);

estoque.inserir(p);
estoque.inserir(p2);
estoque.inserir(p3);


let vencidos = estoque.listarVencidos();
console.log(vencidos);

