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
function  repeatString(str, n) {
    do {
        str * n
    } while(str === 'string');
}