// JavaScript Total Recall SBA 308

/** Section A. Q + A
 * 
 * 1. How do we assign a valua to a variable?
 *      To assign a value to a variable in programming, we use the assignment operator = to set the variable to a specific value.
 *   ex. let variableName = value;
 * let is used to declare a variable. const (for variable that can not be reassigned) and less common var can also be used.  The value you are assigning can be a number, string, boolean, object, array, etc.  YOu can also change the value of a variable after it's be initialized, unless declared with const.
 * 
 * 2. How do we change the value of a variable?
 *      To change the value of a variable, you simply reassign a new value to the variable using the assignment operator = .  The syntax is the same as when you first assign the value to the variable.
 *  ex. let age = 25;  //initial assignment
 *      age = 30;      // Reasssigning a new value to 'age'
 *  ex. with Objects
 *      const person = { name: "Athene", age: 41 };
 *      person.age = 42;  // changing the 'age' property of the object
 *  ex. with Arrays
 *      const fruits = ["apple", "banana", "orange"];
 *      fruits[0] = "grape";   //changing the first element of the array
 * 
 * 3. How do we assign an existing variable to a new variable?
 *      To assign an existing variable to a new variable, you simply use the assignment operator = and reference the original variable.  This means the new variable wil take the same value as the original variable.
 *  ex. let original = 10;  // Original variable
 *      let newVar = original;  // New variable assigned the value of the original variable.
 *      If the original variable holds a primitive value (like a number, string or boolean), the new variable will simply copy that value.  If the original variable holds a reference value (like an object or array), the new variable will reference the same object or array in memory, so changes to one will affect the other.
 *  ex. with Arrays
 *      let frfiuts = ["apple", "banana"];
 *      let newFruits = fruits;  // newFruits references the same array as fruits.
 * 
 * 4. Remind me, what are declare, assign, and define?
 *      Declare/Declaration, is the process of creating a variable and telling the program it exists.  When you decalre a variable, you specify its name, but you're not necessarily gicing it a value at that point.
 *  ex. let x;  // Declariing a variable 'x', but not assigned a value yet
 * 
 *      Assign/Assignment, is the process of giving a variable a value.  Once a variable is declared, you can assign it a value at any time.  This is done by using the assignment operator =
 *  ex. x = 5;  //assigning the value 5 to variable 'x'
 * 
 * You can also assign a value toa variable either when you declare it or later in the code.
 *  ex. let x;  // Declare the variable
 *      x = 5;  // Assign the value 5 to x
 * 
 *      Define/Defining, a variable usually means declaring it and assigning it a value in one statement.  This statement is often used interchangeably with "declare" and "assign" because defining a variable often involves both declaring it and assigninga value to it.
 *  ex. let x = 5;  // Declaring and defining the variable 'x' with a value of 5. x is both declared (the variable is created) and defined (it has a value assigned).
 * 
 * Declare a Variable, Assign a value to the variable, statement has been defined.
 * 
 * 5. What is pseudocoding and why should you do it? 
 *      Pseudocoding is the process of planning or outlining your code in plain language in a structured, step-by-step manner, before writing the actual code.  
 *  ex. Start
    Initialize sum to 0
    For each number from 1 to n
    Add number to sum
    End loop
    Print sum
    End

    Pseudocoding is a helpful step in problem-solving that allows you to design and plan your code logically before diving into actual coding.  It provides clarity, reduces errors, and helps communicate ides with others effectively.

 * 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
        the 80/20 rule is often applied to problem-solving in programming, suggesting that 80% of your time should be spent thinking and planning how you are going to solve the problem, and 20% should be spent actually writing the code.

        30-40% Understanding the problem and gathering information.
        30-40% planning your solution (writing pseudocode, selecting the right approach)
        20-30% Writiing the code and implementing the solution
        10-20% debugging, testing and refining your code
 * 
*/

// Section B. Strings

// Step 1: Create a variable called firstVariable and assign it the value "Hello World"
let firstVariable = "Hello World";  //firstVariable is now holding the string "Hello World"

// Step 2:Change the value of the fristVariable to a number
firstVariable = 42; // First variable is now changed to the number 42

// Step 3: Store the value of the firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;  // secondVariable is now holding the value of the firstVariable, which is 42

// Step 4: Change the value of secondVariable to any string
secondVariable = "This is a new string";  //secondVAriable is now holding the new string

//Log the value of the firstVariable to check its value after changes
console.log(firstVariable); // output should be 42

// Step 5: create a variable called yourNAme and set it equal to your name as a string
let yourName = "Athene Nefos"; //your name is now holding the the string "Athene Nefos"

//Step 6: Concatenate "Hello, my name is " with yourName to create a greeting message
let greeting = "Hello, my name is " + yourName;  // Concatenates the strings and stores it in the greeting variable

//log the greeting to see the final result
console.log(greeting); // Output: "Hello, my nam eis Athene Nefos"

// Section c. Booleans

/** Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name'); //Comparison operator that evaluates equality; check for strickly equality
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);  // "or" ooperator
console.log(false || false || false || false || false || true);  // We use || because it only needs one true value to make the entire statement true.  && would make the statement false.
console.log(false || !false)

console.log(e === 'Kevin');  //Check for strick equality
console.log(a + b === c); // Class note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // Class note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');  // USe the loose equality operator to compare 48 and '48'

// Section D. The Farm 

//Decalre Variable
let animal = "cow";
 animal = "dog"
// Check 'if' the animal is a cow, using a 'if' statement, using strick equality operator.  
if (animal === "cow") {
   console.log("moooooo")
} else {  // use else statement to handle situations where 'animal' is not a 'cow' 
   console.log("Hey!  You are not a cow.");
}

// Section E. Driver's Ed
/**Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young." */

// Step 1: Declare variable to hold the person's age
let age = 16;

//Step 2: Check the age using an "if-else' statement" . Age value can be change to test different cases.
if (age >= 16) {
   console.log("Here are the Keys!")
} else {
   console.log("Sorry, you're too young.");
}


/**II. Loops
Remember: USE letwhen you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)

Variables declared with 'let' are block-scoped. This means that the variable 'i' exists only inside the 'for' loop and is not accessible outside it.  If you omit 'let', the variable 'i' becomes implicitly global, which can lead to bugs if other parts of your code accidentally reference or modify 'i'.  
   You can use 'const' in a loop, but only under specific circumstances. 'Const works in 'for...of' or 'for ...in' loops because the loop variable is not reassigned.  'Const' doesnot work in traditional 'for' loops where the variable needs to change (e.g. increment with i++)  
*/

// loops A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.

// Step 1. Use a 'for' loop to iterate from 0 to 10.
//initialize a variable 'i' with the value 0 (starting point)
// Set the loop condition to 'i = 10' so the loop runs until 10 (inclusive)
// Increment 'i' by 1 on each iteration using 'i++'

for (let i = 0; i <= 10; i++) {
   //step 2. Print out the current value of 'i' to the COOooonsolee
console.log(i)
}

//to write an loop excluding a number, we would just use 'i < 10" in this example

// 2. Write a loop that will print out all the numbers from 10 up to and including 400

//We would use the same steps as above, but with some numeric adjustments

for (let i = 10; i <= 400; i++) {
   console.log(i)
}

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

// we would use the same steps as above, however , change the incrementor from "i++" to "i += 3" to increment every third number

for (let i = 12; i <= 4000; i += 3) {
   console.log(i)
}

//loops will stop at the specified conditional number

//loops B. Get Even

/**Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number" */
//Use ' if...else' steatement.  Use modulo % , to see if remainder is strickly equal to 0. 

for (let i = 1; i <= 100; i++){
   if (i % 2 === 0) {
      console.log(i + " <-- is an even number");
   } else {
   console.log(i)
   }
}

// loops C. Give Me Five

// 1. For the numbers 0 - 100, print out "I found a "number". High five!" if the number is a multiple of five

for (let i = 0; i <= 100; i++) {
   //check if the number 'i' is a multiple of five by using modulo (remiander should be 0)

   // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three. add another if statement
   //For numbers divisible by both three and five, be sure your code prints both messages
if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
   console.log(`I found a ${i}.  Three is a crowd and High five`)
}

   if (i % 3 === 0 && i !== 0) {
      console.log(`I found a ${i}. Three is a crowd.`)
   }

   if (i % 5 === 0 && i !== 0){ //not ooperator added to exclude 0
      console.log(`I found a ${i}. High Five`);  //use template literal for the special message
   }
}

// loops D. Savings account

/**Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it. */

/** To save the sum of all the numbers between 1 and 10 to a variable called bank_account, you can use a loop to iterate through the numbers and accumulate their sum. */

// Step 1: Declare a variable 'bank_ account' and initialize it to 0

let bank_account = 0

// Step 2: Use a 'for' loop to iterate through numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
   // Step 3: Add each number 'i' to 'bank_account' during each iteration
   bank_account += i;
}

//Step 4: Print out bank_account' to check the total sum
console.log(bank_account);

/**You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it. */

let bank_account2 = 0;
for (let i = 1; i <= 100; i++) {
   //Multiply each number 'i' by 2 and add it to 'bank_account'
   bank_account2 += i * 2;
}
console.log(bank_account2);

// Arrays & Control flow

// A. Talk about it: 
/** 1. What are the things in an array called?
 * The individual items in an array are called elements or items. Each element in an array can be accessed by its index, which represents its position in the array.
 * 
 * 2. Do Arrays guarantee those things will be in order?
 * UYes, arrays do guarantee order.  The elements in an array are stored in a specific sequence, and each element can be accessed using its index.  The order of elements in an array is maintained exactly as they were added, so if you add elements in a certain order, that order will be preserved.
 * 
 * 3. What real-life thing could you model with an array?
 * a playlist of songs, a row of seats in a theater, a list of tasks for the day, inventory items for in a store, days of the week, a line of customers waiting.
   */

// B. Easy does it 

// 1. Create an array that contains three quotes and store it in a variable called quotes.
let quotes = [
   "The only way to do great work is to love what you do. - Steve Jobs", "Success is not final, failure is not fatal; It is courage to continue that counts. WInston Churchill", "In the middle of difficulty lies oppurtunity. - Albert Einstein"
];
console.log(quotes[0]);


// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
//You would use the index of that element.  Since array indices start at 0, the 1st element is at index 0.
console.log(randomThings[0]);

//2. Change the value of "Hello"to "World"
// Change the value at index 2
randomThings[2] = "World";

console.log(randomThings);
// console.log to make sure array is updated

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//access the third element
console.log(ourClass[2]);

//Change the value of "Github' to "Octocat"

ourClass[4] = "Octocat";

console.log(ourClass);

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

console.log(ourClass);

//Mix it up
const myArray = [5, 10, 500, 20]
//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon", "Charlie");

console.log(myArray);

//Remove the 5 from the beginning of the array.
//.shift() removes the first element from the Array.

myArray.shift();

console.log(myArray);

//Add the string "Bob Marley"to the beginning of the array.
//.unshift() adds one or more elements to the beginning of the array.

myArray.unshift("Bob Marley");

console.log(myArray);

//Remove the string of your choice from the end of the array.
//.pop() removes the last element of the array
myArray.pop();

console.log(myArray);

//Reverse this array using Array.prototype.reverse(). 
myArray.reverse();

console.log(myArray);

//Did you mutate the array? 
//Yes, the .reverse() method mutates the array.
//What does mutate mean? 
// When an array is mutated, it means the orignal array is changed directly in memory. The original order is no longer available unless you explicitly store a copy of the array before "mutating" it , in this case .reverse()
//Did the .reverse()method return anything?
//Yes, the .reverse() method returns the reversed array. However, since .reverse() mutates the array in place, the returned array is simply the same array object as the original, just reversed.

//F. Biggie Smalls
/**Create a variable that contains an integer.

Write an if ... else statement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100. */

let number = 85; //you can change this to test different values

if (number < 100) {
   console.log("little number");
} else {
   console.log("big number");
}

// G. Monkey in the Middle
/** Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".*/

let number2 = 7;

if (number2 < 5) {
   console.log("little number");
} else if (number2 > 10) {
   console.log("big number");
} else {
   console.log("monkey");
}

// H. What's in Your Closet
/** Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. */

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// Access the third item in the array. Rememeber, index starts at 0
const thirdItem = kristynsCloset[2];

//log
console.log(`Kristyn is rocking that ${thirdItem} today!`);

//  2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

//.splice() method allows you to insert items at a specific position in the array. (keynote: .splice(starting positon in index, deleteCount if applicable, item insertion))

kristynsCloset.splice(6, 0 , "raybans");

console.log(kristynsCloset);

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow
// you can directly update the specific index of the array

kristynsCloset[5] = "stained knit hat";

console.log(kristynsCloset);

//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
//use braket notation to access Thom's shirt array

const thomsShirt = thomsCloset[0][0]; // first array is shirts, first item is at index 0

console.log(`Thom is wearing a ${thomsShirt} today.`);

// 5. In the same way, access one item from Thom's pants array

const thomsPants = thomsCloset[1][1];

console.log(`Thom is wearing ${thomsPants} today.`)

// 6. Access one item from Thom's accessories array.

const thomsAccessory = thomsCloset[2][1];

console.log(`Thom is rocking a ${thomsAccessory} today.`);

//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking sharp in his ${thomsShirt}, ${thomsPants} and ${thomsAccessory}.`);

//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset);

// pt. 4 Functions

// A. printGreeting 
//interpolate : the process of inserting a value (like the 'name' variable in this example) into a string.  This is done using template literals and ${} syntax. 

function printGreeting(name) {
   return `Hello, ${name}! Welcome to our Program.`;
}

console.log(printGreeting("Athene"));

// B. printCool
//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
   console.log(`${name} is super cool!`);
}
printCool("Athene"); // call the function

// C.  calculateCube
/** Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

console.log(calculateCube(5));
=> 125 */

function calculateCube(number) {
   const volume = number ** 3; //calculate the cube using exponentiation
   return volume;
}

console.log(calculateCube(5))

//D. isVowel 
/**Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want. */

function isVowel(char) {
   //Convert to lowercase for case-sensitive comparison
   char = char.toLowerCase();

   //array containing the vowels to check if character is one of the vowels, we will not include "y"
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   return vowels.includes(char);
}

//Test function
console.log(isVowel('a'));
console.log(isVowel('E'));
console.log(isVowel('i'));
console.log(isVowel('O'));
console.log(isVowel('u'));
console.log(isVowel('b'));
console.log(isVowel('1'));
console.log(isVowel(' '));
console.log(isVowel('Y')); 

// E. getTwoLengths

/** Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13] */

function getTwoLengths(string1, string2) {
   //Return an array containing the lengths of both strings
   return [string1.length, string2.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths

/** Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]*/

function getMultipleLengths(stringsArray) {
   //use map method to create a new array of lengths. The .map() method iterates over each element in stringsArray and applies the function string => string.length. This function calculates the length of each string and returns a new array containing those lengths
   return stringsArray.map(string => string.length);
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
/**Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

console.log(maxOfThree(6, 9, 1));
=> 9  note: do not use Math.max, but look up later */

function maxOfThree(num1, num2, num3) {
   //compare to find the largest number
   if (num1 >= num2 && num1 >= num3) {
      return num1;
   } else if (num2 >= num1 && num2 >= num3) {
      return num2;
   } else {
      return num3;
   }
}

console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(15, 10, 15));
console.log(maxOfThree(4, 4, 4));

// H. printLongestWord
/** Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"*/

function printLongestWord(wordsArray) {
   let longestWord = wordsArray[0];

   //loop through array to find the longest word
   for (let i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > longestWord.length) {
         longestWord = wordsArray[i]
      }
   }
   return longestWord 
}

//Start by assuming that the first word (wordsArray[0]) is the longest.  Loop through the array starting from the second element (i = 1). If the current word is longer than the longestWord, update longestWord to the current word. After going through the entire array, return the longestWord.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects
/**Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user. */

// A. Make a user object
/** 1.Create an object called user.
2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like. */

const user = {
   name: "Athene Nefos",
   email: "athena.nefos@gmail,com",
   age: 41,
   purchased: []
};

console.log(user);

//B. Update the user
/** 1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
2. Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++*/

user.email = "athene@example.com";
user.age++;

console.log(user);

//C: Adding keys and values
/** Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).*/

user.location = "Cincinnati, OH";
console.log(user);

//D. Shopaholic 
/** Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
Console.log just the "Merino jodhpurs" from the purchasedarray.*/

//adding purchased items to the purchased array
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]); //access the third item in the array (index 2)

//E. Object-within-object
/**Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we console.log user, we would see the friendobject added to our user object */
//Adding a friend object to the user object

user.friend = {
   name: "Grace Hopper",
   age: 85,
   location: "Arlington, VA",
   purchased: []
};

console.log(user.friend.name);
console.log(user.friend.location);

// Change friend age to 55

user.friend.age = 55;

console.log(user.friend.age);

//The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray. Console.log just "A latte" from the friend's purchasedarray.

user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);

// F. Loops
/** Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.*/
for (let i = 0; i < user.purchased.length; i++) {
   console.log(user.purchased[i]);
}

/**The for loop runs from i = 0 to i < user.purchased.length, where user.purchased.length gives the number of elements in the purchased array.
console.log(user.purchased[i]); prints each element in the user.purchased array during each iteration */

//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for (let i = 0; i < user.friend.purchased.length; i++) {
   console.log(user.friend.purchased[i]);
}

//G. Function can operate on objects
/**Write a single function updateUserthat takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a return statement, it will merely modify the user object. */

function updateUser() {
   user.age++
   user.name = user.name.toUpperCase();
}

updateUser();
console.log(user); //Check user object


// pt.2 Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(person) {
   person.age++;
   person.name = person.name.toUpperCase();
}

oldAndLoud(user);

console.log(user);
