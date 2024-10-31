function calcularSaldoRank(vitorias, derrotas){
    let calculoSaldo = vitorias - derrotas
    return calculoSaldo
}

function calcularRank(saldo){
    let nivel

    if (saldo < 10){
        nivel = "Ferro"
    } else if(saldo >= 11 && saldo <= 20){
        nivel = "Bronze"
    } else if(saldo >= 21 && saldo <= 50){
        nivel = "Prata"
    } else if(saldo >= 21 && saldo <= 80){
        nivel = "Ouro"
    } else if(saldo >= 81 && saldo <= 90){
        nivel = "Diamante"
    } else if(saldo >= 91 && saldo <= 100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }
    return nivel   
}

let saldo = calcularSaldoRank(200, 100)
let rank = calcularRank(saldo)

console.log("O Herói tem saldo de " + saldo + " e está no nível " + rank + ".")
