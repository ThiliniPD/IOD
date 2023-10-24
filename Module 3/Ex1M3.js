/* 1. What are the results of these expressions? */

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
" -9 " + 5 // -9 5
" -9 " - 5 // -14 
null + 1 // 1
undefined + 1 // NaN
undefined == null // true
undefined === null // false
" \t \n" - 2 // -2



/* 2. Which of the below are not giving the right answer? 
      Why are they not correct? 
      How can we fix them? */

let three = "3"
let four = "4"
let thirty = "30"

let multiplication = three * four // 12
let division = three / four // 0.75
let subtraction = three - four // -1
let lessThan1 = three < four // true


//let addition = three + four // 34
// Answer is incorrect.
// Because, it's concatenating the strings "3" and "4".
// It's not performing mathematical addition.
let addition = Number(three) + Number(four); // 7; the fixed code

//let lessThan2 = thirty < four // true 
// Answer is incorrect.
// Because, JS performs a lexicographic (string) comparison, 
// where "30" comes before "4" resulting "30" < "4".
let lessThan2 = Number(thirty) < Number(four); // false; the fixed code



/* 3. Which of the following console.log messages will print? Why? */

if ("0") console.log('#2 zero is true') // wil print 
// "0" is a non-empty string, 
// which is considered "true" in a boolean context.
// So, the code inside the if statement will execute
// '#2 zero is true' will be printed.

if (-1) console.log('negative is true') // will print
// -1 is a non-zero number and considered "true".

if (1) console.log('positive is true') // will print
// 1 is a non-zero number.

if (0) console.log('#1 zero is true') // won't print
// The condition 0 is evaluated as "false" 
// when used in conditions.
// So the code inside the if statement will not execute.

if (null) console.log('null is true') // won't print
// The condition null is evaluated as "false" 



/* 4. Rewrite this if using the ternary/conditional operator '?'.
      Test it with different values for a and b.
      What does the ‘+=’ do? */
/*
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += 'less than 10';
} 
else {
    result += 'greater than 10';
}
*/

// written using '?' operator
let a = 2, b = 3;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';

// ‘+=’ is a short way of writing 'result = result + '



/* 5. Rewrite the following function using: 
    a) function expression syntax, and 
    b) arrow function syntax. 
    Test each version to make sure they work the same. */

function getGreeting(name) {
    return 'Hello ' + name + '!';
}

// function expression syntax
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
}

// arrow function syntax
const getGreeting = (name) => ('Hello ' + name + '!')



/* 6. a) Complete the inigo object by adding a lastName property and including it in the
         greeting.
      b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
         prints his famous catch phrase to the console. HINT: see
         https://www.imdb.com/title/tt0093779/characters/nm0001597.
      c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', //lastname property added
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;// lastName included
        console.log(greeting + this.getCatchPhrase(person));
    },

    // Answer for Q6.B
    /* 
    getCatchPhrase(person) {
        if (person.numFingers == 6) {
            return 'Hello. My name is Inigo Montoya'
        }
        else {
            return 'Nice to meet you.'
        };

    }
    */

    // Answer for Q6.C
    getCatchPhrase: (person) => ((person.numFingers == 6) ? 'Hello. My name is Inigo Montoya' : 'Nice to meet you.')

}

inigo.greeting(westley)
inigo.greeting(rugen)



/* 7.  The following object represents a basketball game and keeps track of the score as the
       game progresses.
    a) Modify each of the methods so that they can be ‘chained’ together and the last line of
       the example code works
    b) Add a new method to print the full time final score
    c) Add a new object property to keep track of the number of fouls and a method to
       increment it, similar but separate to the score. Include the foul count in the half time and
       full time console messages
    d) Test your object by chaining all the method calls together in different combinations.*/

const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this // Answer for Q7.A
    },
    basket() {
        this.score += 2;
        return this
    },
    threePointer() {
        this.score += 3;
        return this
    },
    halfTime() {
        console.log(`Halftime score is ${this.score} and foul count is ${this.fouls}`);
        return this
    },
    fullTime() {
        console.log(`Final score is ${this.score} and foul count is ${this.fouls}`);
    }, // Answer for Q7.B
    foul() {
        this.fouls++;
        return this
    } // Answer for Q7.C
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

basketballGame.basket().freeThrow().freeThrow().foul()
    .basket().threePointer().basket().fullTime(); // Answer for Q7.D



/* 8.  The object below represents a single city.
    a) Write a function that takes an object as an argument and uses a for...in loop to access
       and print to the console each of those object properties and their values. Test it using
       the sydney object below.
    b) Create a new object for a different city with different properties and call your function
       again with the new object. */

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

// Answer for Q8.A
function cityInfo(city) {
    let a = ""
    for (let key in city) {
        a += `${'key:' + key} ${'value:' + city[key]}\n`
    }
    return a; 
}

console.log(cityInfo(sydney));


// Answer for Q8.B
const auckland = {
    name: 'Auckland',
    population: 1_657_000,
    state: 'North Island',
    founded: '18 September 1840',
    timezone: 'NZST'
}
console.log(cityInfo(auckland));



/* 9.  Use the following variables to understand how JavaScript stores objects by reference.
    a) Create a new moreSports variable equal to teamSports and add some new sport
       values to it (using push and unshift)
    b) Create a new dog2 variable equal to dog1 and give it a new value
    c) Create a new cat2 variable equal to cat1 and change its name property
    d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
       changed? Why?
    e) Change the way the moreSports and cat2 variables are created to ensure the
       originals remain independent */

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// Answer for Q9.A
/*
let moreSports = teamSports;
moreSports.push('Netball', 'Badminton');
moreSports.unshift('Swimming', 'Table tennis');

// Answer for Q9.B
let dog2 = dog1;
dog2 = 'Bruno';

// Answer for Q9.C
let cat2 = cat1;
cat2.name = 'Browny';

// Answer for Q9.D
console.log(teamSports);
console.log(dog1);
console.log(cat1);
*/

// teamSports has changed due to,
// 'unshift' adding the specified elements to the beginning of the array and 
// 'push' adding  the specified elements to the end of the array.

// dog1 has not changed it's value.
// Although dog2 is assigned the value of dog1,
// it's a SEPARATE COPY because a string is immutable, 
// so changing dog2 will not affect dog1.

// cat1 has changed it's name property.
// Because cat2 is assigned the REFERENCE of cat1, 
// making both variables point to the same object. 


// Answer for Q9.E
let moreSports = teamSports.slice();
moreSports.push('Netball', 'Badminton');
moreSports.unshift('Swimming', 'Table tennis');

let cat2 = {...cat1};
cat2.name = 'Browny';

console.log(teamSports);
console.log(dog1);
console.log(cat1);



/* 10. The following constructor function creates a new Person object with the given name and
       age values.
    a) Create a new person using the constructor function and store it in a variable
    b) Create a second person using different name and age values and store it in a separate
       variable
    c) Print out the properties of each person object to the console
    d) Rewrite the constructor function as a class called PersonClass and use it to create a
       third person using different name and age values. Print it to the console as well.
    e) Add a canDrive method to both the constructor function and the class that returns true
       if the person is old enough to drive. */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    // Answer for Q10.E
    this.canDrive = () => (this.age >= 18);
}

// Answer for Q10.A
let p1 = new Person("Thilini", 20);

// Answer for Q10.B
let p2 = new Person("Disara", 6);

// Answer for Q10.C
console.log(p1);
console.log(p2);

// Answer for Q10.D
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    // Answer for Q10.E
    canDrive() {
        return (this.age >= 18);
    }
}

let p3 = new PersonClass("Shanaka", 36);
console.log(p3);

