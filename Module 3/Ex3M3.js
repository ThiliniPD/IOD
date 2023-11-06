/* 1. makeCounter below is a decorator function which creates and returns a function that 
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if 
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the 
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how 
much each call to counter() should increase the counter value by. */
function makeCounter(name) {
    let currentCount = 0;

    return function() {
        currentCount++;
        console.log(`${name} ${currentCount}`)
        return currentCount;
    };
}
let counter1 = makeCounter('c1');
counter1(); // 1
counter1(); // 2

// Answer to Q1.A
let counter2 = makeCounter('c2');
counter2(); // 1
counter2(); // 2

counter1(); // 3
counter1(); // 4

counter2(); // 3
counter2(); // 4

// Answer to Q1.B
function makeCounter2(name, startFrom) {
    let currentCount = startFrom;

    return function() {
        currentCount++;
        console.log(`${name} ${currentCount}`)
        return currentCount;
    };
}

let counter2_1 = makeCounter2('c2_1', 10);
counter2_1(); // 11
counter2_1(); // 12

// Answer to Q1.C
function makeCounter3(name, startFrom, incrementBy) {
    let currentCount = startFrom;

    return function() {
        currentCount += incrementBy;        
        console.log(`${name} ${currentCount}`)
        return currentCount;
    };
}

let counter3_1 = makeCounter3('c3_1', 10, 8);
counter3_1(); // 18
counter3_1(); // 26



/* 2.   The following delayMsg function is intended to be used to delay printing a message until 
        some time has passed. 
    a)  What order will the four tests below print in? Why?
    b)  Rewrite delayMsg as an arrow function
    c)  Add a fifth test which uses a large delay time (greater than 10 seconds)
    d)  Use clearTimeout to prevent the fifth test from printing at all. */
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// Answer to Q2.A
// #4: Not delayed at all
// #3: Delayed by 0ms
// #2: Delayed by 20ms
// #1: Delayed by 100ms

// Because, setTimeout allows us to delay execution of a function 
// by a defined interval of time.
/*  SetTimeout is taken out of the normal flow and an event is created.
    so even with delay = 0, a function called using setTimeout will happen after other codes in the normal flow.


// Answer to Q2.B
const delayMsg_1 = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// Answer to Q2.C
let fifthTimer = setTimeout(delayMsg, 15000, '#5: Delayed by 15s');

// Answer to Q2.D
clearTimeout(fifthTimer) 



/* 3.   'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, 
        similar requests until there's a brief pause, then only executing the most recent of those 
        requests. See https://www.techtarget.com/whatis/definition/debouncing
        It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server 
        requests being initiated if a user clicks repeatedly on a button.
        Using the following code to test and start with:
    a)  Create a debounce(func) decorator, which is a wrapper that takes a function func and 
        suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second 
        pause, the most recent call to func should be executed and any others ignored.
    b)  Extend the debounce decorator function to take a second argument ms, which defines the 
        length of the period of inactivity instead of hardcoding to 1000ms
    c)  Extend debounce to allow the original debounced function printMe to take an argument 
        msg which is included in the console.log statement. 
function printMe() {
    console.log('printing debounced message')
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 
//1000ms of no calls
setTimeout( printMe, 100); 
setTimeout( printMe, 200); 
setTimeout( printMe, 300); */

// Answer to Q3.A
function printMe() {
    console.log("debounce msg");
}

printMe = debounce(printMe);

function debounce(origFunction) {
    let timer; 
    return function() {
        clearTimeout(timer)
        timer = setTimeout(origFunction, 1000);
    }
}

setTimeout(printMe, 100)
setTimeout(printMe, 200)
setTimeout(printMe, 300)

// Answer to Q3.B 
function debounce(origFunction, ms) {
    let timer; 
    return function() {
        clearTimeout(timer)
        timer = setTimeout(origFunction, ms);
    }
}

// Answer to Q3.C
function printMe(msg) {
    console.log("debounce msg: "+ msg);

}

printMe = debounce(printMe, 50);

function debounce(origFunction, ms) {
    let timer; 
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => origifinc.apply(this, arguments), ms);
    }
}
setTimeout(printMe, 100, "first");
setTimeout(printMe, 200, "second");
setTimeout(printMe, 300, "third");



/*  4.  The Fibonacci sequence of numbers is a famous pattern where the next number in the 
        sequence is the sum of the previous 2.
        e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
    a)  Write a function printFibonacci() using setInterval that outputs a number in 
        the Fibonacci sequence every second.
    b)  Write a new version printFibonacciTimeouts() that uses nested setTimeout
        calls to do the same thing
    c)  Extend one of the above functions to accept a limit argument, which tells it how many 
        numbers to print before stopping. */

// Answer to Q4.A
function printFibonacci() {
    let array = [1, 1];
    let i = 0;
    function fn() {
        if (array.length > i) {
            console.log(`Fib ${i} is ${array[i]}`)
        }
        else {
            let nextChar = array[i - 1] + array[i - 2];
            console.log(`Fib ${i} is ${nextChar}`)
            array.push(nextChar);
        }
        i++
    }

    setInterval(fn, 1000);
}

//printFibonacci()

// Answer to Q4.B
function printFibonacciTimeouts() {
    let array = [1, 1];
    let i = 0;
    function fn() {
        //console.log(`For ${i} is ${array.length}`)
        if (array.length > i) {
            console.log(`Fib ${i} is ${array[i]}`)
        }
        else {
            let nextChar = array[i - 1] + array[i - 2];
            console.log(`Fib ${i} is ${nextChar}`)
            array.push(nextChar);
        }
        i++
        setTimeout(fn, 500);
    }

    setTimeout(fn, 500);
}

//printFibonacciTimeouts()

// Answer to Q4.C
function printFibonacciEx(num) {
    let array = [1, 1];
    let i = 0;
    function fn() {
        if (array.length > i) {
            console.log(`Fib ${i} is ${array[i]}`)
        }
        else {
            let nextChar = array[i - 1] + array[i - 2];
            console.log(`Fib ${i} is ${nextChar}`)
            array.push(nextChar);
        }
        i++
        if (i > num) {
            clearInterval(timer)
        }
    }

    let timer = setInterval(fn, 1000);
}

//printFibonacciEx(10)



/*  5.  The following car object has several properties and a method which uses them to print a 
        description. When calling the function normally this works as expected, but using it from 
        within setTimeout fails. Why? */
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works

setTimeout(car.description, 200); //fails
/*
    a)  Fix the setTimeout call by wrapping the call to car.description() inside a 
        function
    b)  Change the year for the car by creating a clone of the original and overriding it
    c)  Does the delayed description() call use the original values or the new values 
        from b)? Why?
    d)  Use bind to fix the description method so that it can be called from within 
        setTimeout without a wrapper function
    e)  Change another property of the car by creating a clone and overriding it, and test that 
        setTimeout still uses the bound value from d) */

//Answer to Q5
//Because, its context is lost.

// Answer to Q5.A
setTimeout(() => car.description(), 200); 

// Answer to Q5.B
let car2 = { ...car, year: 2010 }

// Answer to Q5.C
setTimeout(() => car2.description(), 200);
// It uses the new value, because what is being called is the 
// description function of new object and it has the new value.

// Answer to Q5.D
setTimeout(car.description.bind(car), 200);

// Answer to Q5.E
let car3 = { ...car, make: "Prius" }
setTimeout(car3.description.bind(car), 200);
// It doesn't use the new value, because it takes this object as car and not car3.



/*  6.  Use the Function prototype to add a new delay(ms) function to all functions, which can 
be used to delay the call to that function by ms milliseconds. 
function multiply(a, b) {
    console.log( a * b );
}

    a)  Use the example multiply function below to test it with, as above, and assume that all 
        delayed functions will take two parameters
    b)  Use apply to improve your solution so that delayed functions can take any number of 
        parameters
    c)  Modify multiply to take 4 parameters and multiply all of them, and test that your 
        delay prototype function still works. */

// Answer to Q6.A
Function.prototype.delay = function (ms) {
    let origFunction = this;
    console.log(this)
    
    return function (a, b) {
        setTimeout(origFunction, ms, a, b)
    }
}

function multiply(a, b){
    console.log('multiply: ' + (a * b));;
}

multiply.delay(500)(5, 5); 

// Answer to Q6.B
Function.prototype.delay = function (ms) {
    let origFunction = this;
    console.log(this)
    
    return function () {
        setTimeout(() => origFunction.apply(this, arguments), ms)
    }
}

function multiply2(a, b){
    console.log('multiply2: ' + (a * b));
}

multiply2.delay(500)(5, 15);

// Answer to Q6.C
Function.prototype.delay = function (ms) {
    let origFunction = this;
    console.log(this)
    
    return function () {
        setTimeout(() => origFunction.apply(this, arguments), ms)
    }
}

function multiply3(a, b, c, d){
    console.log('multiply3: ' + (a * b * c * d));
}

multiply3.delay(2500)(5, 5, 2, 2);



/*  7.  In JavaScript, the toString method is used to convert an object to a string representation. 
        By default, when an object is converted to a String, it returns a string that looks something 
        like [object Object]. 
        However, we can define our own toString methods for custom objects to provide a more 
        meaningful string representation.
    a)  Define a custom toString method for the Person object that will format and print 
        their details
    b)  Test your method by creating 2 different people using the below constructor function 
        and printing them
    c)  Create a new constructor function Student that uses call to inherit from Person and 
        add an extra property cohort
    d)  Add a custom toString for Student objects that formats and prints their details. Test 
        with 2 students. */
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const person1 = new Person('James Brown', 73, 'male')
console.log('person1: ' + person1) //prints person1: [object Object]

// Answer to Q7.A
Person.prototype.toString = function(){
    return (`I am ${this.name} of ${this.age} year of age.`)
}
console.log('person1: ' + person1)

// Answer to Q7.B
const person2 = new Person('Peter Harvy', 50, 'male')
console.log('person2: ' + person2)

// Answer to Q7.C
class Student extends Person {
    constructor(name, age, gender, cohort)
    {
        super(name, age, gender); 
        this.cohort = cohort; 
    }

    toString() {
        return (`I am ${this.name} of ${this.age} year of age and enrolled in ${this.cohort}.`)
    }

}

// Answer to Q7.D
const student1 = new Student('Oliver King', 22, 'male', 'Oct23')
console.log('student1: ' + student1)

const student2 = new Student('Lina Jackson', 24, 'female', 'Oct23')
console.log('student2: ' + student2)



/*  8.  The following DigitalClock class uses an interval to print the time every second once 
        started, until stopped. */
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
//myClock.start()
/*  a)  Create a new class PrecisionClock that inherits from DigitalClock and adds the 
        parameter precision – the number of ms between 'ticks'. This precision parameter 
        should default to 1 second if not supplied.
    b)  Create a new class AlarmClock that inherits from DigitalClock and adds the 
        parameter wakeupTime in the format hh:mm. When the clock reaches this time, it 
        should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should 
        default to 07:00 if not supplied. */

// Answer to Q8.A
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision) {
        super(prefix)
        this.presicion = (precision == undefined) ? 1000 : presicion;    
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.presicion);
    } 
}

// Answer to Q8.B
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime) {
        super(prefix)
        this.wakeupTime = (wakeupTime == undefined) ? '07:00' : wakeupTime;
    }
    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

        if (this.wakeupTime == `${hours}:${mins}`) {
            console.log("Wake up");
            this.stop()
        }
        
    }
}

const alarmClock = new AlarmClock('my alarm:', '01:56')
//alarmClock.start()



/*  9.  We can delay execution of a function using setTimeout, where we need to provide both 
        the callback function and the delay after which it should execute.
    a)  Create a promise-based alternative randomDelay() that delays execution for a 
        random amount of time (between 1 and 20 seconds) and returns a promise we can use 
        via .then(), as in the starter code below
    b)  If the random delay is even, consider this a successful delay and resolve the promise, 
        and if the random number is odd, consider this a failure and reject it
    c)  Update the testing code to catch rejected promises and print a different message
    d)  Try to update the then and catch messages to include the random delay value */

// Answer to Q9.A
function randomDelay() {
    
    function fn (resFn, rejFn) {
        let randomNum = (Math.floor(Math.random() * 19) + 1) * 1000
        setTimeout(() => { resFn(1) }, randomNum)
    }

    return new Promise(fn)
}

let start = Date.now()
randomDelay().then(() => {
    let diff = (Date.now() - start) / 1000
    console.log(`There appears to have been a delay of ${diff}s.`)
} );

// Answer to Q9.B
function randomDelayEx() {
    
    function fn (resFn, rejFn) {
        let randomNum = (Math.floor(Math.random() * 19) + 1)
        setTimeout(() => {
            if((randomNum % 2) == 0) {
                resFn(1)
            }
            else {
                rejFn(`delay ${randomNum} is odd`)
            }
        }, (randomNum * 1000))
    }

    return new Promise(fn)
}

// Answer to Q9.C
randomDelayEx().then(() => {
    let diff = (Date.now() - start) / 1000
    console.log(`There appears to have been a delay of ${diff}s.`)
} ).catch((reason) => {
    console.log(`Call to randomDelayEx() failed with '${reason}'`)
});

// Answer to Q9.D
function randomDelayEx2() {
    
    function fn (resFn, rejFn) {
        let randomNum = (Math.floor(Math.random() * 19) + 1)
        setTimeout(() => {
            if((randomNum % 2) == 0) {
                resFn(randomNum)
            }
            else {
                rejFn(randomNum)
            }
        }, (randomNum * 1000))
    }

    return new Promise(fn)
}

randomDelayEx2().then((result) => {
    let diff = (Date.now() - start) / 1000
    console.log(`There appears to have been a delay of ${diff}s for ${result}s.`)
} ).catch((reason) => {
    console.log(`Call to randomDelayEx() failed with '${reason}'`)
});

/*  10. Fetch is a browser-based function to send a request and receive a response from a server, 
        which uses promises to handle the asynchronous response. 
        The below fetchURLData uses fetch to check the response for a successful status 
        code, and returns a promise containing the JSON sent by the remote server if successful 
        or an error if it failed. (To run this code in a node.js environment, follow the instructions in 
        the comments before the function.)
    a)  Write a new version of this function using async/await
    b)  Test both functions with valid and invalid URLs
    c)  (Extension) Extend your new function to accept an array of URLs and fetch all of them,
        using Promise.all to combine the results.
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module", */
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

// Answer to Q10.A
async function fetchURLDataEx(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

// Answer to Q10.B
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

fetchURLData('https://jsonplaceholder.typicode.com/todos/invalid')
.then(data => console.log(data))
.catch(error => console.error(error.message));

try{
    let data = await fetchURLDataEx('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
}
catch (error) {
    console.error(error.message)
}

try{
    let data = await fetchURLDataEx('https://jsonplaceholder.typicode.com/todos/invalid')
    console.log(data)
}
catch (error) {
    console.error(error.message)
}
