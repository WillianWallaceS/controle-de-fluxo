const querystring = require('node:querystring') //Querystring contém dados que serão enviados ao servidor
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'verão'
})

const fullurl =`${baseUrl}/${uri} `

console.log(fullurl)
console.log(url.parse(fullurl))