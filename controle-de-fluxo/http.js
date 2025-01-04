//requisições e servidores
//HTTP que vai permitir criar um servidor que fornece informações como um cliente que pode consumi-las 
//Requisição é quando eu busco um recurso remoto e quero resgatar alguma informação pode ter respostas como : arquivos, objetos js, xml. 

const http = require('node:http')

const server = http.createServer((request, response) => { 
    const {method, statusCode, url} = request
    const esportes = ['Volei', 'Basquete', 'Tennis']

    if(url === '/'){
       response.write('<div> <h1>Hello2from node</h1> <p>http server</p></div>')
        response.end()
        return
    }

    if(url === '/esportes'){
        response.write(JSON.stringify(esportes))
        response.end()
        return
    }

})

server.listen(3000, 'localhost',() => {
    console.log('Server running on http://localhost:3000') //Roda servidor pelo chrome
})
   


