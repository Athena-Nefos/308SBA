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
console.log(greeting);
