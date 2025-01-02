//SERVE PARA SEPARAR NÚMEROS PARES E IMPARES DE UMA LISTA ATRÁVES DO RESTO DA DIVISÃO

const listaDeNumeros = [10,60,20,47,34,29,15,32,87,93]
const listaDePares = []
const listaDeImpares = []

let indiceDoNumero = 0
//LENGTH conta a quantidade de informações que tem dentro da Array/Lista
while (indiceDoNumero < listaDeNumeros.length) {
    if (listaDeNumeros[indiceDoNumero] % 2 === 0 ){
        listaDePares.push(listaDeNumeros[indiceDoNumero])
    } else {
        listaDeImpares.push(listaDeNumeros[indiceDoNumero])

    }

    indiceDoNumero = indiceDoNumero +1 //serve para avançar para o próximo item,sem essa parte ele ficaria em 0 sendo um looping infinito 
}

console.log(listaDePares)
console.log(listaDeImpares)