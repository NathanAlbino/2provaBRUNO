var entrada = require("readline-sync");
var conta = parseFloat(entrada.question("digite o numero da sua conta: "));
if (conta != 43415891801) {
    console.log("usuario nao encontrado");
}
var senha = parseFloat(entrada.question("digite a senha(CPF): "));
if (senha != 43415891801) {
}
else {
    var Saldo = 1000.00;
    console.log("Seja bem-vindo ao banco do SESI");
    console.log("Saldo em conta: R$", Saldo);
    console.log("escolha alguma das opcoes abaixo: ");
    console.log("1.saque");
    console.log("2.deposito");
    console.log("3.sair");
    var opcao = parseInt(entrada.question("opcao escolhida: "));
    if (opcao == 1) {
        var n1 = parseInt(entrada.question("digite o valor que deseja sacar: "));
        if (n1 > Saldo) {
            console.log("saldo indisponivel");
        }
        else {
            Saldo = Saldo - n1;
            var senha_1 = parseFloat(entrada.question("digite a senha(CPF): "));
            if (senha_1 == 43415891801) {
                console.log("seu saldo e: ", Saldo);
            }
        }
    }
    if (opcao == 2) {
        var n1 = parseInt(entrada.question("digite quanto deseja depositar: "));
        Saldo = Saldo + n1;
        var senha_2 = parseFloat(entrada.question("digite a senha(CPF): "));
        if (senha_2 == 43415891801)
            console.log("seu saldo e: ", Saldo);
    }
    if (opcao == 3) {
        console.log("erro");
    }
}
