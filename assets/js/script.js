console.log("JavaScript carregado com sucesso!");



// let quando uma variável pode receber outra valor durante a execução
let quantidade = 3;
console.log(quantidade);

quantidade = 5;
console.log(quantidade);



// const quando não houver necessidade de reatribuição
const nomeCurso = "Desenvolvimento de Interfaces Web";
console.log(nomeCurso);

const instituicao = "PUC Minas";
console.log(instituicao);



const nome = "Carlos";
const idade = 24;
const aprovado = true;
const endereco = undefined; // valor não definido
const observacao = null; // ausência intencional do valor

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovado);

console.log(typeof "Olá");
console.log(typeof 42);
console.log(typeof false); 

//template literals
const mensagem =
    `Nome: ${nome} | Idade: ${idade}`;

console.log(mensagem);



const preco = 120;
const qtd = 3;

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const percentualDesconto = 10;

const subtotal = preco * quantidade;
console.log(subtotal);

const desconto =
    subtotal * percentualDesconto / 100;

const total = subtotal - desconto;

console.log(`Subtotal: ${subtotal}`);
console.log(`Desconto: ${desconto}`);
console.log(`Total: ${total}`);



const resultado1 = 10 + 5 * 2;
const resultado2 = (10 + 5) * 2;

console.log(resultado1);
console.log(resultado2);

console.log(idade > 18);
console.log(idade >= 18);
console.log(idade < 18);
console.log(idade <= 18);



console.log(quantidade === 5);
console.log(quantidade !== 5);
console.log(quantidade === "5");



// operadores lógicos: &&, || e !
const possuiIngresso = true;
const podeEntrar =
    idade >= 18 && possuiIngresso;

console.log(podeEntrar);



const nota = 82;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Muito bom");
} else if (nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}




// recursos do console
console.log("Informação");
console.warn("Atenção");
console.error("Erro");