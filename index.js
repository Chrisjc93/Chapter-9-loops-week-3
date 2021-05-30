let name = "LaunchCode";

for (let i = 0; i < name.length; i++){
  console.log(name[i]);
}

let myName = "Christopher Constantinou";

for (let i=0;i<myName.length;i++){
  console.log(myName[i]);
}


let languages = ["JS", "Java", "C#", "Python"];

for (let i = 0; i < languages.length; i++) {
   console.log(languages[i]);
}

console.log("\n");

let family = ["emma", "chris", "shadow", "sunny"];

for (let i = 0; i < family.length; i++) {
   console.log(family[i]);
}

for (let i = 6; i < name.length; i++) {
   console.log(name[i]);
}
for (let i = 0; i < 3; i++) { // this shows that the loop variable i isn't always needed inside the body of the loop
   console.log("LaunchCode");
}

/* 9.4.1.2. Loop Condition
The loop condition is executed before each loop iteration. It is always a boolean expression, evaluating to true or false. If the condition is true, the loop body executes. If the condition is false, loop execution stops and the program continues with the next line of code below the loop. */

// UPDATE EXPRESSION In all of the examples we have seen so far, the update expression has been i++, incrementing the loop variable by 1. However, it can update the loop variable in other ways.

for (let i = 2; i < 51; i = i + 6) {
   console.log(i);
}

let phrase = "LaunchCode's LC101";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

// 9.5. The Accumulator Pattern
// this is the acumulator loop. it will equal 21, same as 1 + 2 + 3 + 4 + 5 + 6
let n = 6;
let total = 0;

for (let i = 1; i <= n; i++){
  total +=i; // the long way is total = total +i;
  console.log(total);
}

console.log(total);

//////////////////////// REVERSING A STRING /////////////////////////

let str = "blue";
let reversed = "";
let reversed2 = "";

for (let i = 0; i < str.length; i++){ // you can actually do this using i-- and str.length - 1, and str[i] cause i = length-1
  console.log(str[i]);
  reversed2= str[i] + reversed2;
}
console.log(reversed2);
///////////// OR CAN DO LAUNCHCODES WAY  ///////////////////
for (let i = 0; i < str.length; i++) {
   reversed = str[i] + reversed;

   // reversed = reversed + str[i];? would = blue
  // Notice that we don't use the += operator within the loop, since reversed += str[i] is the same as reversed = reversed + str[i].
}

console.log(reversed);

// 9.5.3. Summing an Array

let numbers = [2, -5, 13, 42];
let total2 = 0;

for (let i = 0; i < numbers.length; i++) {
   total2 += numbers[i];
}
console.log("WHILE LOOPS");
console.log("WHILE LOOPS");
console.log("WHILE LOOPS");
// 9.6. while Loops

// THIS CAN BE CHANGED TO 
for (let i = 0; i < 6; i++) {
   console.log(i);
}
console.log("WHILE LOOPS");
console.log("WHILE LOOPS");
console.log("WHILE LOOPS");
let i33 = 0;
// TO THIS USING A WHILE LOOP
while (i33 < 6) {
   console.log(i33);
   i33++;
}

1
2
3
4
5
6

let i = 0;

const input = require('readline-sync');


// if you enter -1 it will keep looping till a positive is met.
let num11 = input.question('Please enter a positive number:');
num11 = Number(num11);

while (num11 <= 0) {
   num11 = input.question('Invalid input. Please enter a positive number:');
   num11 = Number(num11);
}

// 9.7. Terminating a Loop With break

for (i = 0; i < 42; i++) {

   // rest of loop body

   if (i > 10) {
      break;
   }

}


//////////////////////////////////////////////// A while loop can be used with break to search for an element in an array.
let numbers3333 = [4,5,6,7,42];
let searchVal = 42;
let jj= 0;

while (jj < numbers3333.length) {
  console.log(numbers[jj]);
   if (numbers3333[jj] === searchVal) {
      break;
   }
   jj++;
}
// this works because if jj is higher than numbers.length it means that it was never located in the while loop. if it's below then it was and itill print where.
if (jj < numbers3333.length) {
   console.log("The value", searchVal, "was located at index", jj);
} else {
   console.log("The value", searchVal, "is not in the array."); }

// The for loop is typically used to iterate through a fixed set of values that can be determined before the loop executes. This is why we say that a for loop exhibits definite iteration.

/* On the other hand, the while loop is more flexible, as we saw with the example of validating user input. In that case, we could not determine in advance how many times the loop would iterate; it depended entirely on the values provided by the user during program execution. For this reason, a while loop is often described as indefinite iteration. We expect that eventually the condition controlling the iteration will evaluate to false and the iteration will stop.

(Unless we have an infinite loop, which is a problem we want to avoid.) While we saw that any for loop can be written as a while loop by manually creating and updating a loop variable, it is preferable to use a for loop when iterating over a collection or iterating a fixed number of times. Manually updating the variable in a while loop is more work for you, the programmer, and can lead to infinite loops if not handled properly */

let  str1 = 'Rutabagas';
let  str2 = 'Chemistry';
let str3 = ""
for (let i = 0; i < str1.length; i++){
  str3 += `${str1[i]}${str2[i]}`.toLowerCase();
}

console.log(str3);

let str4 = []; // I wrote this example to use push instead of the string literal
for(let i = 0; i < str1.length; i++){
  str4.push(str1[i],str2[i]);
}
console.log(str4.join("").toUpperCase());