//Código que conta de 0 a 100 

    for (let contador = 0; contador < 100; contador++ ){
      console.log(contador)
    }
//------------------------------------------------------------------

//Mostra a lista de Números 
//Código imperativo FOR
const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56]

   for (let contador = 0; contador < listaDeNumeros.length; contador +=1 ){
       console.log(listaDeNumeros[contador])
  }

//Código declarativo  FOR OF
//Fez a mesma coisa só que mais simplificado
for (const numero of listaDeNumeros){
    console.log(numero)
}

//Código para encontrar nomes em uma lista/ Array com o FOR OF 

 const usuarios = ['Antonia', 'Carolina']

for (const usuario of usuarios ){
    console.log(usuario)
}
