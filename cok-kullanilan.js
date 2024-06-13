let items = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmen", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length)
console.log(items[0][0])

let newItems = items.splice(1,5)

console.log("newItems:" , newItems)
console.log("items:" , items)

items.unshift("Lorem")
items.push("Ipsum")
console.log( items.indexOf("Ipsum") )

let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyItems",copyItems)
console.log("items",items)

