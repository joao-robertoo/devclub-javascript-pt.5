const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Abóbora', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abóbora', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Abóbora', pricePerKg: 11.9, kg: 3 },
]

const finalValue = cart.reduce((acc, value) => {
    const result = value.pricePerKg * value.kg
    return acc + result
}, 0)