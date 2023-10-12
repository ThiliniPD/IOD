// This function returns the sum of two numbers.
function sum(num1, num2){
    return(num1 + num2)
    }

if (sum(5, 8) != 13) throw Error("Sum test failed")
if (sum(0, -3) != -3) throw Error("Sum test failed")
if (sum(0, 547.23) != 547.23) throw Error("Sum test failed")

console.log("sum: All tests passed")



// This function substract a number from another.
function balance(num1, num2){
    return(num1 - num2)
}
if (balance(5, 8) != -3) throw Error("balance test failed")
if (balance(20, 0) != 20) throw Error("balance test failed")
if (balance(33.2, 0.2) != 33.0) throw Error("balance test failed")

console.log("balance: All tests passed")


// This function divide a number from another.
function division(num1, num2){
    return(num1 / num2)
}

if (division(5, 2) != 2.5) throw Error("division test failed")
if (division(12, 5) != 2.4) throw Error("division test failed")
if (division(33.2, 0.2) != 166) throw Error("division test failed")

console.log("division: All tests passed")


// This function multiply two numbers.
function multiply(num1, num2){
    return(num1 * num2)
}

if (multiply(5, 2) != 10) throw Error("multiply test failed")
if (multiply(5, 0) != 0) throw Error("multiply test failed")
if (multiply(30, -2) != -60) throw Error("multiply test failed")

console.log("multiply: All tests passed")




// This function takes a name as an string 
// argument and prints “Hello <name>”
function nameOfThePerson(name){
    return("Hello " + name)
}
nameOfThePerson("Thilini")

if (nameOfThePerson("Thilini") != "Hello Thilini") throw Error("nameOfThePerson test failed")

console.log("nameOfThePerson: test passed")