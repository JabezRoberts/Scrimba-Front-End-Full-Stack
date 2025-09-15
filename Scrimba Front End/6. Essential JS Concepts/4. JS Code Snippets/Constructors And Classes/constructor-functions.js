/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

function Character(name) {
    this.name = name
    this.collectedItemsArr = []
    
    this.addItem = function(item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const dave = new Character('Dave')
const sarah = new Character('Sarah')
const kerry = new Character('Kerry')
dave.addItem("sword")
sarah.addItem("wand")
kerry.addItem("map")
console.log(dave)
console.log(sarah)
console.log(kerry)


/*
Challenge:
Rebuild this constructor function as a class.
*/
class Character {
    constructor(name) {
        this.name = name
        this.collectedItemsArr = []
        
    }
    addItem(item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

// function Character(name) {
//     this.name = name
//     this.collectedItemsArr = []
//     this.addItem = function (item) {
//         this.collectedItemsArr.push(item)
//         console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
//     }
// }

const wizard = new Character('Merlin')
wizard.addItem('a wand')
