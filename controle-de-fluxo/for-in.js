const users = {
    name: 'JOaNa DaRK',
    email: 'JOana@gmail.com',
    age: 27,
    address: 'Rua Divinópolis ' 

}

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
