
let items = [10 ,20 , 30, 40, ]
console.log("items - ilk hali : ", items)

items.push(50)
console.log("50 : ", items)

items.unshift(5)
console.log("5 : ", items)

let lastItem = items.pop()
console.log("lastItem : ", lastItem, ", items :" , items)

let firstItem = items.shift()
console.log("firstItem : ", firstItem, ", items :" , items)

items[0] = 5;
console.log(items)

items[items.length-1] = 1000
console.log(items)