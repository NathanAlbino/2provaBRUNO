
const entrada = require("readline-sync");
let conta: number = parseFloat(entrada.question("digite o numero da sua conta: "));
if (conta != 43415891801) {
console.log("usuario nao encontrado");
}
let senha: number = parseFloat(entrada.question("digite a senha(CPF): "));
if (senha != 43415891801) {

}else{
let Saldo:number = 1000.00;
console.log("Seja bem-vindo ao banco do SESI");

console.log("Saldo em conta: R$",Saldo);

console.log("escolha alguma das opcoes abaixo: ");

console.log("1.saque");

console.log("2.deposito");

console.log("3.sair");

let opcao = parseInt(entrada.question("opcao escolhida: "));

if (opcao == 1 ) {
    let n1:number = parseInt (entrada.question("digite o valor que deseja sacar: "));
    if (n1 > Saldo) {
    console.log("saldo indisponivel")
    }
    else{
    Saldo = Saldo - n1;
    let senha: number = parseFloat(entrada.question("digite a senha(CPF): "));
    if (senha == 43415891801) {
    console.log("seu saldo e: ", Saldo)
    }
    }
}
if (opcao == 2 ) {

let n1: number = parseInt(entrada.question("digite quanto deseja depositar: "));
Saldo = Saldo + n1;
let senha: number = parseFloat(entrada.question("digite a senha(CPF): "));
    if (senha == 43415891801)
console.log("seu saldo e: ", Saldo);
}
if (opcao == 3) {
console.log("erro");
}

}



