//CÓDIGO PARA ENCONTRAR USUÁRIOS/NOMES ATRÁVES DA LETRA INICIAL

const listaDeContatos = ['Paula','Anderson','Zeca','Joana','Cristian','Robertinho','Mauricio']

let encontraUsuario = false
let atingiuFimDaLista = false
let contador = 0

while(!encontraUsuario && !atingiuFimDaLista){
    const usuarioAtual = listaDeContatos[contador]
    if (usuarioAtual.startsWith('J')){ //ENCONTRA O NOME PELA LETRA DESEJADA
        encontraUsuario = true 
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    contador = contador +1

    //CASO NÃO HAJA O NOME NA LISTA 
if (contador === listaDeContatos.length){
    atingiuFimDaLista = true
    console.log('Usuário não foi encontrado')
}
}