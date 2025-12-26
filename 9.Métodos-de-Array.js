/* 
    ARRAY'S
        - push -> Adiciona mais um item ao array
        - lenght -> Mostra o tamanho do array
        - sort -> organiza o array
        - delete -> Deleta o item de uma posição do Array
        - every -> Esse método testa se todos os elementos do Array passam em uma condição.
        - some -> O .some() faz algo parecido com o .every(), mas ao invés de testar se todos os elementos passam na condição, ele testa se ao menos um elemento passa na condição.
        - fill -> Preenche o array com um valor estático
        - find -> Retorna o valor do primeiro elemento do array que satisfaz a condição
        - findIndex -> Retorna o índice do primeiro elemento do array que satisfaz a condição
        - concat() -> Junta dois ou mais arrays em um novo array

        - includes() -> Verifica se um array contém um determinado valor e retorna true ou false
        - join() -> Junta todos os elementos de um array em uma string

        - slice() -> Retorna uma cópia de uma parte do array dentro de um novo array
        - splice() -> Adiciona ou remove itens de um array em uma posição específica
        - pop() -> Remove o último item do array
        - shift() -> Remove o primeiro item do array
*/

//const myArray = [1, 2, 3]

//myArray.push(4)
//myArray.push("Abacate") // Adiciona um novo item no final do array
//----------------------

//const myArray = [1, 2, 3]
//console.log(myArray.length) // Mostra a quantidade de itens dentro do meu array
//----------------------

//const myArray = ['limão', 'abóbora', 'laranja']
//myArray.sort() // Organiza o array em ordem crescente
//----------------------

//const myArray = ['limão', 'abóbora', 'laranja']
//delete myArray[1] // Deleta o item na posição 1 do array
//----------------------

//const users = [
//    {name: 'Luiz', credit: 600},
//    {name: 'Maria', credit: 900},
//    {name: 'Eduardo', credit: 300},
//    {name: 'Letícia', credit: 200},
//]
//const isTrue = users.every(user) => user.credit >= 500 && user.credit <= 1000) // Verifica se todos os usuários possuem crédito maior ou igual a 500
//---------------------

//const users = [
//    {name: 'Luiz', credit: 600},
//    {name: 'Maria', credit: 900},
//    {name: 'Eduardo', credit: 300},
//    {name: 'Letícia', credit: 200},
//]
//const isTrue = users.some(user) => user.credit > 800) // Verifica se ao menos um usuário possui crédito maior que 800
//---------------------

//const numbers = [1, 2, 3, 4, 5]
//mnumbers.fill(3, 0, 2) // Preenche o array com o valor 3, do índice 0 ao índice 2 (não inclusivo)
//---------------------

//const users = [
//    {name: 'Luiz', credit: 600},
//    {name: 'Maria', credit: 900},
//    {name: 'Eduardo', credit: 300},
//    {name: 'Letícia', credit: 200},
//];
// const findAUser = users.find( user => user.name === "Maria") // Retorna o primeiro usuário com o nome "Maria"
//---------------------

//const users = [
//    {name: 'Luiz', credit: 600},
//    {name: 'Maria', credit: 900},
//    {name: 'Eduardo', credit: 300},
//    {name: 'Letícia', credit: 200},
//];
// const findAUser = users.findIndex( user => user.name === "Maria") // Retorna o índice do primeiro usuário com o nome "Maria"
//---------------------

//const array1 = ['a', 'b', 'c']
//const array2 = ['d', 'e', 'f']
//const numbers1 = [1, 3, 5]
//const numbers2 = [2, 4, 6]

//const array3 = numbers1.concat(array2) // Junta os dois arrays em um novo array
//--------------------

//const elements = ['Fire', 'Air', 'Water'];
//const myElements = elements.join('-') // Junta todos os elementos do array em uma string, separados por '-'
//--------------------

//const elements = ['Fire', 'Air', 'Water'];
//elemnets.pop() // Remove o último item do array
//--------------------

//const elements = ['Fire', 'Air', 'Water'];
//elemnets.shift() // Remove o primeiro item do array
//--------------------

//const numbers = ["João", "Maria", "Ana", "Pedro", "Carla"];
//const newArray = numbers.slice(1, 4) // Retorna um novo array com os itens do índice 1 ao índice 4 (não inclusivo)
//--------------------

//const users = ["João", "Maria", "Ana", "Pedro", "Carla"];
//users.splice(2, 1, "Letícia", "Eduardo") // Remove 1 item a partir do índice 2 e adiciona "Letícia" e "Eduardo" nessa posição
//--------------------
