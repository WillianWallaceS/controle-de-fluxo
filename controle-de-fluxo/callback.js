const inserirNome = (callback) => { 
    let name = 'Willian'
    callback(name);

}

const meuNome = (name) => {
    console.log(`Olá ${name}`);
}

inserirNome(meuNome);

