let weightSouvenirs=75;
let weightBauble=112;

let countSouvenirs=prompt("Введите количество сувениров");
let countBauble= prompt("Введите количество безделушек");

let totalWeight = countSouvenirs * weightSouvenir + countBauble * weightBauble;
document.write(`Общий вес - ${totalWeight} граммов`);
