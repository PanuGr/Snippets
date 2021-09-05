//Underscore makes it easier to read big numbers. Doesn't affect the code
const number = 1_000_000;

//replace method
const str = "Jack is cool. Jack is nice"
str.replace('Jack', 'Jenny')//replaces the first that match
str.replaceAll('Jack', 'Jenny')// replaces all that match

/*LABELS
Labels allow to skip an inner loop, if a condition applies and continue or exit the outer loop */
loop1: for (let i = 0; i < array.length; i++) {
    loop2: for (let j = 0; j < array.length; j++) {
        console.log();
        if (i === 1) {
            continue loop1
        }
        if (i === 2) {
            break loop1 // breaks out completely of the loop
            break loop2 // breaks out of the inner loop
        }
    }
}

/*Object.freeze doesn't allow us to mutate our object.
For nesting properties we need to apply again object */
const person = Object.freeze({
    name: 'Panu',
    age: 33,
    address: Object.freeze({ zip: 23500 })
})

//dealing with duplicate content. ONLY for arrays
const uniqueNumbers=[1,1,2,3,4,5,5]
const set= new Set(uniqueNumbers) //outputs a list without duplicate
set.has(1)//returns true/false if the value exists
set.delete(1)// deletes the selected value

//CONSOLE.LOG values
console.log()
console.error()
console.warn()
console.assert(x===1, 'message')
console.table(array)// it shows the output as table. easy to work with