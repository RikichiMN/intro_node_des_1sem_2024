console.log("Hello World!");

let nome = 'Henrique'; 

//Aqui ele mandou dar o nome escrito na variavel nome 
console.log(nome);

let idade = 25;
let altura = 1.75;

//Aqui ele deu o nome dado antes e a idade 
console.log('Nome: ' + nome + ' - Idade: ' + idade + ' anos');
console.log(`Nome: ${nome} - Idade: ${idade} anos`);

let trabalha = true;

//Aqui ele mandou dizer se é true ou false. Como a variavel trabalho foi dada como obrigatoriamente true, vai ser sempre true 
console.log(trabalha);
console.log('Trabalha: ' + (trabalha === true ? 'Sim' : 'Não'));

if (trabalha === true) {
    console.log('Trabalha: Sim');
} else {
    console.log('Trabalha: Não');
}

const sangue = 'B+';

//Aqui foi classificado o que é cada tipo de variavel 
console.log(
'vNome: ' + typeof(nome) + '\n' +
'vIdade: ' + typeof(idade) + '\n' + 
'vAltura: ' + typeof(altura) + '\n' +
'vTrabalha: ' + typeof(trabalha) + '\n' +
'vConstante: ' + typeof(sangue) + '\n'
);

let endereco = {
    "rua" : "Brasil",
    "num": 108,
    "bairro" : "centro",
    "cidade" : "tupã",
    "uf" : "SP"
}

console.log(endereco);

//Aqui foi dado um endereço completo 
console.log(typeof(endereco));

//Aqui foi dado uma lista de frutas e ele mandou dar a primeira 
let frutas = ['banana', 'mamão', 'maçã'];
console.log(frutas[0]);

let velha = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

//Aqui foi pedido dois numeros e ele pegou esses numeros da variavel velha
console.log(velha[1][1]);
console.log(typeof(velha));
//Aqui ele disse se a variavel velha é uma Array ou não 
console.log((Array.isArray(velha)) ? 'Array': 'Não é Array');