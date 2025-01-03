const users = {
    name: 'JOaNa DaRK',
    email: 'JOana@gmail.com',
    age: 27,
    address: 'Rua Divinópolis ' 

}

//FOR IN Para objetos e FOR OF para arrays 

for(const prop in users ){//Serve para localizar propriedades no código
    console.log(prop) //Prop é uma forma reduzida de dizer propriedades. 
} 
for(const key in users){
    console.log(users[key])//Conseguiu mostrar todas as propriedades e valores contidos no objeto
}

for(const key in users){
    if(key === 'name' || key === 'email'){ //serve para trocar os valores 
        users[key] = 'novo valor'
    }
}

for(const key in users){
    if (key === 'name' || key === 'email') { //Pegando as propriedades e fazendo modificações 
        users[key] = users[key].toLowerCase()//Serve para diminuir as letras

    }
    
}

for(const key in users){
    if (key === 'name'){
        const names = users[key].split(' ') //Dividiu o Nome e Sobrenome transformando em uma Array e limpando os nomes para ficar mais legivel
        users[key] = '' //continuação do split
        for (const name of names){
            const normalizedNames = name.toLowerCase()
             const [primeiraLetra, ...restoDoNome] = normalizedNames //Separou cada letra do nome, pegando a primeira letra e o resto do nome 
        
             
             users[key] = users[key] + ' '+ primeiraLetra.toUpperCase() + restoDoNome.join('')//colocou a primeira letra maiuscula e juntou o resto do nome e colocou no final 
             users[key] = users[key].trim() // Para tirar espaços indevidos tanto do começo quanto do fim
             
        }
      

    }
    if (key === 'email'){
        users[key] = users[key].toLowerCase()
    }
}
console.log(users)
