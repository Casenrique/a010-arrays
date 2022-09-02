const arrayNumeros = [4, 55, 92, 53, 99, 37];
const arrayPalavras = ["oceano", "computador", "gilette", "trabalho", "aprendizado"];
const arrayMisto = [33, 55, "batata", true, false, "convento", 2]
//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNumeros.length);
console.log(arrayPalavras.length);
console.log(arrayMisto.length);
//Imprima o primeiro item do primeiro array, o segundo item do segundo array,
//e o terceiro item do terceiro array;
console.log(arrayNumeros[0]);
console.log(arrayPalavras[1]);
console.log(arrayMisto[2]);
//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array,
//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
//Isto é, um `includes()` verdadeiro, e outro falso.
console.log("O arrayNumeros inclui o número 92?", arrayNumeros.includes(92));
console.log("O arrayMisto inclui a palabra \"bicicleta\"?", arrayMisto.includes("bicicleta"));