let numbers = [3, 5, 10, 2, 8]
//sommare i numeri
let somma = numbers.reduce((acc, num)=> acc + num)
console.log(somma);
//calcolo media
let media = somma / numbers.length
console.log(media);
//valore minore di media
let ValoriMinoriMedia = numbers.filter(num => num < media)
console.log(ValoriMinoriMedia);




