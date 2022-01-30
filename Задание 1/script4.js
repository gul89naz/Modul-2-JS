let weightSouvenirs=75;
let weightBauble=112;

let countSouvenirs=Number(prompt("Введите количество сувениров:"));
let countBauble= Number(prompt("Введите количество безделушек:"));

let totalWeight = countSouvenirs * weightSouvenirs + countBauble * weightBauble;
alert("Общий вес :" + " " + totalWeight + "граммов");
