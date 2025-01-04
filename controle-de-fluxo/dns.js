//Código para encontrar a DNS/ O IP do site proposto

const dns = require('node:dns')

const searchedUrl1 = 'google.com'

const ipv4 = dns.resolve4(searchedUrl1, (err, addresses) => {
    if (err) {
        console.log('Url não encontrada')
        return
    }
   console.log(addresses)


})

async function bootstrap() {
    const addresses = await dns.promises.resolve4(searchedUrl1)
    console.log(addresses) //Esse tambem serve para ver endereço IP
    
    const nameServers = await dns.promises.resolveNs(searchedUrl1)
    console.log(nameServers)//DNS utilizados para encontrar o Goggle 
    //NAMESERVERS é um servidor de DNS que armazena os registros de um dominio 
    const ipNs = await dns.promises.resolve4(nameServers[1])
    const resolver  = new dns.Resolver()
     resolver.setServers(ipNs ?? 'ns4.google.com')

    const addresseswithResolver = resolver.resolve4(searchedUrl1 , (error, addresses) =>{
    if (error){
        console.error('Não foi possivel encontrar')
    }
    console.log(addresseswithResolver)
})
    
}
bootstrap()