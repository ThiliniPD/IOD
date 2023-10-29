/* 1. Create a function that takes a string as a parameter and returns the string with the first
      character of each word changed into a capital letter, as in the example below. Test it with
      different strings. */

function ucFirstLetters(inString) {
    let str = ''
    let spaceFound = true; // first leter of a word, comes after a space.
    for (let i = 0; i < inString.length; i++) {
        let char = inString.at(i)
        if (char == ' ') {
            spaceFound = true;
            str += char
        }
        else if (spaceFound == true) { 
            str += char.toUpperCase()
            spaceFound = false;
        }
        else {
            str += char
        }
    }

    return str
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles
 


/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
      length is greater than the max length. 
      It should return either the truncated text, with an ellipsis (...) added to the end if it was too long,
      or the original text otherwise.
      b) Write another variant of the truncate function that uses a conditional operator. */

      //console.log(truncate('This text will be truncated if it is too long', 25))
      // This text will be truncat... */

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + "...";
    }
    else {
        return str;
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))

// Answer to Q2.B
function truncate(str, max) {
    return (str.length > max) ? str.slice(0, max) + "..." : str;
}

console.log(truncate('This text will be truncated if it is too long', 2))


/*  3. Use the following animals array for the below tasks. Test each one by printing the result to
       the console. Review the following link for tips:

       https://developer.mozilla.org/en-
       US/docs/Web/JavaScript/Reference/Global_Objects/Array

    a) Add 2 new values to the end
    b) Add 2 new values to the beginning
    c) Sort the values alphabetically
    d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
       middle of the animals array with newValue
    e) Write a function findMatchingAnimals(beginsWith) that returns a new array
       containing all the animals that begin with the beginsWith string. Try to make it work
       regardless of upper/lower case. */

const animals = ['Tiger', 'Giraffe']

// Answer to Q3.A
animals.push('Lion','Elephant');

// Answer to Q3.B
animals.unshift('Monkey', 'Rhino');
console.log(animals)

// Answer to Q3.C
animals.sort();
console.log(animals)

// Answer to Q3.D
function replaceMiddleAnimal(newValue) {
    let mid = (animals.length % 2 == 0) ? animals.length / 2 : (animals.length - 1) / 2;

    animals.splice(mid, 1, newValue);
}

replaceMiddleAnimal('Fox')
console.log(animals)

// Answer to Q3.E
function findMatchingAnimals (beginsWith) { 
     return animals.filter(animal => animal.toUpperCase().startsWith(beginsWith.toUpperCase()));
}

console.log(findMatchingAnimals('T'))   



/* 4.   Write a function camelCase(cssProp) that changes dash-separated CSS properties like
        'margin-left' into camel-cased 'marginLeft'.
        The function should remove all dashes, and uppercase the first letter of each word after a
        dash.
    b)  Create variants of the camelCase function that use different types of for loops, and
    c)  with and without the conditional operator. */

// Answer to Q4.A
function camelCase(cssProp){
    const words = cssProp.split('-');
    const  x = words.map((word, index) => (index == 0) ? word :
        word.charAt(0).toUpperCase() + word.slice(1));
    return x.join('');
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// Answer to Q4.B & C (ANSWERS GIVEN BY JO)
function camelCase2(cssProp) {
    let words = cssProp.split('-');
    let camelcased = '';

    for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            camelcased += words[i]
        }
        else {
            camelcased += words[i].charAt(0).toUpperCase() + words[i].substring(1)
        }
    }
    return camelcased;
}

console.log(camelCase2('margin-left')) // marginLeft
console.log(camelCase2('background-image')) // backgroundImage
console.log(camelCase2('display')) // display

function camelCase3(cssProp) {
    let words = cssProp.split('-');
    let camelcased = '';

    for (let word of words) {
        if (camelcased.length == 0) {
            camelcased += word
        }
        else {
            camelcased += word.charAt(0).toUpperCase() + word.substring(1)
        }
    }
    return camelcased;
}

console.log(camelCase3('margin-left')) // marginLeft
console.log(camelCase3('background-image')) // backgroundImage
console.log(camelCase3('display')) // display

function camelCase4(cssProp) {
    let words = cssProp.split('-');
    let camelcased = '';

    words.forEach(word => {
        if (camelcased.length == 0) {
            camelcased += word
        }
        else {
            camelcased += word.charAt(0).toUpperCase() + word.substring(1)
        }
    })
    return camelcased;
}

console.log(camelCase4('margin-left')) // marginLeft
console.log(camelCase4('background-image')) // backgroundImage
console.log(camelCase4('display')) // display


function camelCase5(cssProp) {
    let words = cssProp.split('-');
    let camelcased = '';

    for (let word of words) {
        camelcased += (camelcased.length == 0) ? camelcased += word : 
            word.charAt(0).toUpperCase() + word.substring(1)
    }
    return camelcased;
}

console.log(camelCase5('margin-left')) // marginLeft
console.log(camelCase5('background-image')) // backgroundImage
console.log(camelCase5('display')) // display



/* 5.   Decimal number operations in JavaScript can lead to unexpected results, as in the
        following:
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
        We can sometimes avoid this using the toFixed function to force the number of decimal
        places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
    a)  Explain why the above code returns the wrong answer
    b)  Create a function currencyAddition(float1, float2) which safely adds the two
        decimal numbers float1 and float2 and returns the correct float result.
    c)  Create a function currencyOperation(float1, float2, operation) which
        safely performs the given operation (either +, -, / or *) on the two numbers and returns
        the correct float result. https://developer.mozilla.org/en-
        US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

    d) (Extension) Extend the above function to include a fourth argument numDecimals
        which allows the operation to support different amounts of decimal places from 1 to 10.
        
        HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
        different values as well as the below:
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true */


// Answer to Q5.A    
// Because, when the machine tries to store certain numbers in binary, the precision is lost 
// and the number needs to be rounded.

// Answer to Q5.B
function currencyAddition(float1, float2) {
    let x = (parseFloat((float1 + float2).toFixed(2)));
    return x
}

console.log(currencyAddition(0.6, 0.1));

// Answer to Q5.C
function currencyOperation(float1, float2, operation) {
    switch (operation) {
            case '+':
                return (parseFloat((float1 + float2).toFixed(2)));
            case '-':
                return (parseFloat((float1 - float2).toFixed(2)));
            case '/':
                return (parseFloat((float1 / float2).toFixed(2)));
            case '*':
                return (parseFloat((float1 * float2).toFixed(2)));
            default:
                return "Invalid. Please try again."
    }
}

console.log(currencyOperation(0.2, 0.1, '+'));
console.log(currencyOperation(0.2, 0.1, '-'));
console.log(currencyOperation(0.2, 0.1, '/'));
console.log(currencyOperation(0.2, 0.1, '*'));
console.log(currencyOperation(0.2, 0.1, '$'));
console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, '+'));

// Answer to Q5.D
function currencyOperationEx(float1, float2, operation, numDecimals) {
    switch (operation) {
        case '+':
                return (parseFloat((float1 + float2).toFixed(numDecimals)));
            case '-':
                return (parseFloat((float1 - float2).toFixed(numDecimals)));
            case '/':
                return (parseFloat((float1 / float2).toFixed(numDecimals)));
            case '*':
                return (parseFloat((float1 * float2).toFixed(numDecimals)));
            default:
                return "Invalid. Please try again."
    }
}

console.log(currencyOperationEx(0.2364, 0.1, '+', 3));
console.log(currencyOperationEx(0.263244, 0.13, '-', 4));
console.log(currencyOperationEx(0.200342, 0.13445, '/', 5));
console.log(currencyOperationEx(0.259457, 0.149, '*', 6));
console.log(currencyOperationEx(0.2, 0.1, '$'));
console.log(0.3 == currencyOperationEx(0.1, 0.2, '+', 10));



/*  6.  Create a function unique(duplicatesArray) which takes an array parameter that may
        include duplicates. Your function should return an array containing only the unique values
        from duplicatesArray.
        Test with the following arrays and create another one of your own. 

        const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
        const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
        console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
        console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]   */


function unique(duplicatesArray) {
    let newArray = [];
    for (let i = 0; i <duplicatesArray.length; i++) {
        if (!newArray.includes(duplicatesArray[i])) {
            newArray.push(duplicatesArray[i]);
        }
    }
    return newArray
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]



/*  7.  Use the following array of book objects to practice the array functions for map, find and
        filter. Test each of your answers to the below tasks.
    a)  Write a function getBookTitle(bookId) that uses the find function to return the
        title of the book object with the matching id.
    b)  Write a function getOldBooks() that uses the filter function to return all book
        objects written before 1950.
    c)  Write a function addGenre() that uses the map function to add a new genre property
        to all of the above books, with the value ‘classic’.
    d)  (Extension) Write a function getTitles(authorInitial) that uses map and
        filter together to return an array of book titles for books written by authors whose
        names start with authorInitial.
    e)  (Extension) Write a function latestBook() that uses find and forEach to get the
        book with the most recent publication date. */
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// Answer to Q7.A
const getBookTitle = (bookId) => {
    let book = books.find(book => book.id == bookId)
    return  book ? book.title :'Not Available';
};
console.log(getBookTitle(2));
console.log(getBookTitle(8));

// Answer to Q7.B
const getOldBooks = () => {
    let oldBooks = books.filter(book => book.year < 1950);
    return oldBooks
};
console.log(getOldBooks());

// Answer to Q7.C
function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic' }));
}
console.log(addGenre());

// Answer to Q7.D
function getTitles(authorInitial) {
    return books.filter(book => book.author.startsWith(authorInitial)).map(book => book.title);
}
console.log(getTitles('A'));

// Answer to Q7.E
function latestBook() {
    let latest = books[0];
    books.forEach((book) => { if (book.year > latest.year) latest = book; });
    return latest;
}
console.log(latestBook());



/*  8.  The following code creates a new Map object for storing names beginning with A, B, or C
        with their phone numbers. */
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
/*  a)  Create a new phoneBookDEF Map to store names beginning with D, E or F
    b)  Initialise the contents of phoneBookDEF by passing in an array of keys/values
    c)  Update the phone number for Caroline
    d)  Write a function printPhoneBook(contacts) that prints the names and phone
        numbers in the given Map
    e)  Combine the contents of the two individual Maps into a single phoneBook Map
    f)  Print out the full list of names in the combined phone book */

// Answer to Q8.A
let phoneBookDEF = new Map() 

// Answer to Q8.B
phoneBookDEF = new Map([
    ['David', '0612312343'],
    ['Edward', '0653221117'],
    ['Firza', '0915221182']
  ]);

// Answer to Q8.C
phoneBookABC.set('Caroline', '0647321182');

// Answer to Q8.D
function printPhoneBook(contacts) {
    contacts.forEach((phoneNumber, name) => {
        console.log(`${name}: ${phoneNumber}`);
    });
}
printPhoneBook(phoneBookABC);

// Answer to Q8.E
let phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log(phoneBook)

// Answer to Q8.F
console.log("Full list of names in the combined phone book is: " + Array.from(phoneBook.keys()));



//   9. Given the below salaries object, perform the following tasks. 
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};
/*  a)  Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
    b)  Write a function topEarner(salaries) that calculates and returns the name of the person
        earning the highest salary */

// Answer to Q9.A
function sumSalaries(salaries) {
    let sum = 0;
    for (let person in salaries) {
      sum += salaries[person];
    }
    return sum;
  }
  
console.log(sumSalaries(salaries)); 

// Answer to Q9.B
function topEarner(salaries) {
    let highestSalary = 0;
    let topEarner; 
    for (let person in salaries) {
        if (salaries[person] > highestSalary){
            highestSalary = salaries[person]
            topEarner = person
        }
    }
    return topEarner
}

console.log(topEarner(salaries));



/*   10.The following code uses the Date object to print the current time and the number of hours
        that have passed today so far. Extend the code to do the following: 
        const today = new Date();
        console.log('Current time is ' + today.toLocaleTimeString())
        console.log(today.getHours() + ' hours have passed so far today')
     a) Print the total number of minutes that have passed so far today
     b) Print the total number of seconds that have passed so far today
     c) Calculate and print your age as: 'I am x years, y months and z days old'
     d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
        of days in between the two given dates. */

// Answer to Q10.A
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
let totalMinutes = (today.getHours() * 60) + today.getMinutes()
console.log(totalMinutes + ' minutess have passed so far today');

// Answer to Q10.B
let totalSeconds = (today.getHours() * 60 * 60) + (today.getMinutes() * 60) + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

// Answer to Q10.C
//let today = new Date();
const birthDay = new Date('2000-09-30')

let daysDiff = today.getDate() - birthDay.getDate();
let monthsDiff = today.getMonth() - birthDay.getMonth();
let yearsDiff = today.getFullYear() - birthDay.getFullYear(); 

if (daysDiff < 0) {
    monthsDiff--;
    const lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    daysDiff = lastMonthDate - birthDay.getDate() + today.getDate();
}

if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
}
let ageForToday = ('I am ' + yearsDiff + ' years, ' + monthsDiff + 'months and ' + daysDiff + 'days old.')
    
console.log(ageForToday);

// Answer to Q10.D   
function daysInBetween(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.abs(Math.floor((firstDate - secondDate) / (24 * 60 * 60 * 1000)));

    return diffDays;
}
console.log('Days in between date1 and date2 are: ' + daysInBetween('2020-05-1', '2023-10-29'));
