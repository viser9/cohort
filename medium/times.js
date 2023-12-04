/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime() {
    var start = Date.now();
    var sum = 0;
    console.log(start);
    for(let i = 0;i<1000000000;i++)
        sum += i;
    var end = Date.now();
    console.log(end);
    console.log(sum);
    return end - start;
}

console.log(calculateTime());

// ******** learnings **********//
// why is there a () in Date.now() but not in arr.length?
// now in Date is a method of object date. you're calling the now method of the Date object to get the current timestamp.
// whereas length is not a method but a property of array object, which can be directly accessed by a dot(.) operator instead of parenthesis.