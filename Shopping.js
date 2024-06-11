let shoppingList = ['pop tarts', 'ramen noodles', 'chips','salsa', 'coffee'];

shoppingList.push('fruit loops');

let coffeeIn = shoppingList.indexOf('coffee');
if (coffeeIn !== -1) {
    shoppingList[coffeeIn] = 'fair trade coffee';
}

let chipIn = shoppingList.indexOf('chips');
if (chipIn !== -1) {
    shoppingList.splice(chipIn, 2, 'rice', 'beans')
}

let shoppingCart = []

let lastItem = shoppingList.pop()
shoppingCart.push(lastItem)

let firstItem = shoppingList.shift()
shoppingCart.push(firstItem)

while (shoppingList.length > 0){
    let item = shoppingList.shift()
    shoppingCart.push(item)
}

shoppingCart.sort()

shoppingCart.reverse()

console.log('In the list: ' + shoppingList)
console.log('In the cart: ' + shoppingCart)