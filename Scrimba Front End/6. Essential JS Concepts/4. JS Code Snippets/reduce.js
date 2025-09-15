const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/
const sumAll = grades.reduce(function(total, nextNum){
    return total + nextNum
})

const average = sumAll/grades.length

console.log(`The class average is ${average}`)

// Objects
export const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]

import { studentsArr } from '/studentsArr'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))

// As an arrow function
import { studentsArr } from '/studentsArr'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce((total, currentStudent) => 
        total + currentStudent.grade, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))



// new example
export const itemsBoughtArr = [
    {
        name: 'Electric Toothbrush Holder',
        priceUSD: 40,
        desc: 'A robotic arm that holds and moves your electric toothbrush for you, ensuring optimal brushing technique.'
    },

{
        name: 'Invisible Milk',
        priceUSD: 10,
        desc: 'A carton of milk that turns completely transparent when poured into a glass, providing a magical and mysterious drinking experience.'
    },
{
        name: 'Self-Chilling Soup Can',
        priceUSD: 15,
        desc: 'A can of soup that instantly chills itself when opened, so you can enjoy a refreshing cold soup on a hot summer day.'
    },
{
        name: 'Glow-in-the-Dark Eggs',
        priceUSD: 8,
        desc: 'A carton of eggs that glow in the dark, making breakfast preparation an exciting and illuminated experience.'
    }
]

import { itemsBoughtArr } from '/itemsBoughtArr.js'

function calculateTotalCost(itemsBoughtArr){
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/
    const total = itemsBoughtArr.reduce((total, currentItem) => 
        total + currentItem.priceUSD, 0)
    return total
}

console.log(calculateTotalCost(itemsBoughtArr))