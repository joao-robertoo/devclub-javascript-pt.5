/* 
MAP -> Mapear o nosso Array
    - Cria um novo Array, a partir do array percorrido (array original)
    - Cria um novo Array, com a mesma quantidade de items do array original
    - Aceita 3 parâmetros (ValorAtual, Index, ArrayOriginal)
*/

const number = [1, 2, 3, 4, 5, 6, 7];

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> index')
    console.log(index + ' -> index')
    console.log(arrayOriginal + ' -> arrayOriginal')
    const newItem = item * 10 
    return newItem
})

console.log(number)
console.log(double)

// const double = number.map((item) => item * 2) // Forma reduzida de fazer a mesma coisa
// console.log(double)