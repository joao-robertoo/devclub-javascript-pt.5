const products = [ // Criei uma lista de produtos com nome e preço
  //Aqui é uma lista (Array) de produtos
  { name: 'Teclado', price: 100 },
  { name: 'Mouse', price: 50 },
  { name: 'Monitor', price: 900 },
]

const newProducts = products.map(product => {
    return {
        name: product.name,
        price: product.price,
        priceWithDiscount: product.price * 0.9
    }
})