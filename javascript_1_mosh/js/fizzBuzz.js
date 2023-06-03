// Fizz Buzz
// Input divisible by 3 => Fizz
// Input divisible by 5 => Buzz
// Input divisible by 3 and 5 => Fizz Buzz
// Not Input divisible by 3 or 5 => input
// Not a number => "Not a number"



const output = fizzBuzz(5)

function fizzBuzz(input){
    let output = '';
    if (typeof input !== 'number') return "Not a number"

    if (input % 3 === 0) output += 'Fizz';
    if (input % 5 === 0) output += 'Buzz';
    if (output) return output; 
    return input
}

console.log(output)