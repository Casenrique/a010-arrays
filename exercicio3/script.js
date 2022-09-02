const arrayNumeros = [4, 55, 92, 53, 99, 37];
const arrayPalavras = ["oceano", "computador", "gilette", "trabalho", "aprendizado"];
const arrayMisto = [33, 55, "batata", true, false, "convento", 2]
const arrayNumerosCopia = arrayNumeros.slice();
const arrayPalavrasCopia = arrayPalavras.slice();
const arrayMistoCopia = arrayMisto.slice();

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumerosCopia.push(23);
console.log(arrayNumeros, arrayNumerosCopia);

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayPalavrasCopia.pop();
console.log(arrayPalavras, arrayPalavrasCopia);

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayMistoCopia.splice(1,1);
console.log(arrayMisto, arrayMistoCopia)