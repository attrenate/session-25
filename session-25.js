// Task 1: Basic Counting Loop (For Loop)
function countDownFrom(n){
    for(let i = 5; i >= 1; i--){
        console.log(i);
    }
}

countDownFrom(5); // Output: 5, 4, 3, 2, 1

// Task 2: Iterate Over an Array (For...of Loop)
function printArrayElements(arr){
    
    for (let fruit of arr) {
        console.log(fruit);
    }
}
printArrayElements(["Apple", "Banana", "Cherry"]);

//Task 3: Sum of Numbers (While Loop)
function  sumNumbersUpTo(n){
    let sum = 0;
    while(n > 0 ){
        sum += n;
        n--;
    }
    return sum;
}
console.log(sumNumbersUpTo(5));  // Output: 15 (5 + 4 + 3 + 2 + 1)

// Task 4: Repeat a String (Do...While Loop)
function  repeatString(str, n){
    if (n === 0) {
        return 'Invalid input';
    }
    let result = '';
    let count = 0;
    do{
        result += str;
        count++;
    }while (count < n)
        return result;
} 

console.log(repeatString("Hello", 3));
console.log(repeatString("Hello", 11));


// Task 5: Iterate Over Object Properties (For...in Loop)
function printObjectKeys(obj) {
   

    for (let variable in obj){
        console.log(variable);
    }
   

}
printObjectKeys({ name: "Alice", age: 25 }); // Output: name, age


// Task 1: Filter Odd Numbers (For Loop)

function filterOdds(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [1, 3, 5]


// Task 2: Find Maximum Value (For...of Loop)
function findMaxValue(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
console.log(findMaxValue([10, 20, 44, 30])); // Output: 30

// Task 3: Reverse a String (While Loop)
function reverseString(str){
    let reversed = '';
    let i = reversed.length - 1;
    while ( i >= 0) {
        reversed += str[i];
        i--;
    }
    return reversed;
}

reverseString("Hello"); // Output: olleH


// Task 4: Validate User Input (Do...While Loop)
  function getValidInput(){
    let input;
    do{
        input = window.prompt('Enter a number: ');
        input = parseFloat(input); 
    } while (isNaN(input) || input <= 1 || input >= 10)
        console.log('Valid input.');
}
// getValidInput();

// Task 1: FizzBuzz with a Twist
function fizzBuzzTwist() {
    for (let i = 1; i <= 50; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } 
        
        else if (i % 3 === 0) {
            console.log('Fizz');
        } 
        
        else if (i % 5 === 0) {
            console.log('Buzz');
        } 
       
        else {
            console.log(i);
        }
    }
}

fizzBuzzTwist();