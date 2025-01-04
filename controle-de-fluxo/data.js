//Trabalhando com datas com NODE.JS 

const { DateTime, Interval } = require('luxon') //Luxon é uma biblioteca que trabalha com datas 

const agora  = DateTime.now()
console.log(agora.month)
console.log(new Date().toLocaleString())//Java Script 

const dataNiver = DateTime.fromFormat('01/02/2005', 'dd/MM/yyyy')
console.log(dataNiver)

const idade = Interval.fromDateTimes(dataNiver, agora).length('year')
console.log(Math.floor(idade))//Calculando idade da pessoa 





