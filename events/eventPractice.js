const { EventEmitter } = require('events')

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`kopi ${name} telah dibuat!`);
}

const makeBill = ({ price }) => {
    console.log(`bill sebesar ${price} telah dibuat`)
}

myEventEmitter.on('coffee-order', makeCoffee)
myEventEmitter.on('coffee-order', makeBill)

myEventEmitter.emit('coffee-order', { name: "kopi susu" })
myEventEmitter.emit('coffee-order', { name: "kopi kapal laut", price: 20000 })
myEventEmitter.emit('coffee-order', { name: "latte coffee", price: 25000 })
