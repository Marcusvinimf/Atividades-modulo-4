let array = ["morango", "banana", "uva", "maça"];

let [ f1, f2, ...resto] = array;

console.log(f1);
console.log(f2);
console.log(f1, resto);
console.log(f1, ...resto);
console.log(f2, ...resto);
// ****************************************************
let [pessoa = "Marcus"] = ["Amanda"];
let [pessoa2 = "Marcus"] = [];

console.log(pessoa);
console.log({...pessoa});
console.log(pessoa2);
// ****************************************************
const objPessoa = {
    nome: "Marcus",
    idade: 24
};
const objPssTel = {...objPessoa, telefone: 91080474};
const {nome, idade} = objPessoa;

console.log(objPessoa);
console.log(objPssTel);
console.log(objPessoa, objPssTel);
console.log(nome, idade);

// ****************************************************

// normal.
function imprime(dados){
    console.log("retorno da função:", dados);
}
//simples!
function imprime2(dados){
    const {nome, idade} = dados
    console.log("retorno da função:", nome, idade);
}
//mais simples ainda!!!
function imprime3({nome, idade}){
    console.log("retorno da função:", nome, idade);
}
imprime(objPessoa);
imprime2(objPessoa);
imprime3(objPessoa);