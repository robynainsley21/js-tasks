console.clear()
let first_number = 15
let second_number = 17

//please uncomment to see result

//First attempt: reassigning values
/*
let firstNumHolder = first_number
first_number = second_number
second_number = firstNumHolder
console.log(first_number);
console.log(second_number);
*/

//Second attempt: using destructuring
/*
[first_number, second_number] = [...[second_number, first_number]]
console.log(first_number);
console.log(second_number);
*/

//Third attempt: using operations
first_number = first_number+=second_number
second_number = first_number - second_number
first_number = first_number - second_number

console.log(first_number);
console.log(second_number);

//final output
/*
first_number = 17
second_number = 15
*/