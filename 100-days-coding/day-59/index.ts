let i = 3;

while (i) {
  alert( i-- );
}
Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.

Hence, the steps of the loop form the following sequence (“loop unrolled”):

let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop

//task 2

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );
The postfix form i++

let i = 0;
while (i++ < 5) alert( i );

//solution

The task demonstrates how postfix/prefix forms can lead to different results when used in comparisons.

From 1 to 4

let i = 0;
while (++i < 5) alert( i );
The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.

Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.

Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

From 1 to 5

let i = 0;
while (i++ < 5) alert( i );
The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

Then follow 2, 3, 4…

Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

The value i = 5 is the last one, because on the next step while(5 < 5) is false.

  //task 3
  
  For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:

for (let i = 0; i < 5; i++) alert( i );
The prefix form:

for (let i = 0; i < 5; ++i) alert( i );

//solution

The answer: from 0 to 4 in both cases.

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
That can be easily deducted from the algorithm of for:

Execute once i = 0 before everything (begin).
Check the condition i < 5
If true – execute the loop body alert(i), and then i++
The increment i++ is separated from the condition check (2). That’s just another statement.

The value returned by the increment is not used here, so there’s no difference between i++ and ++i.

  //task 4

  Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

//solution

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//task 5

Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

  //solution

  let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
The loop do..while repeats while both checks are truthy:

The check for num <= 100 – that is, the entered value is still not greater than 100.
The check && num is false when num is null or an empty string. Then the while loop stops too.
P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.


//task 6

  An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.


//solution

  There are many algorithms for this task.

Let’s use a nested loop:

For each i in the interval {
  check if i has a divisor from 1..i
  if yes => the value is not a prime
  if no => the value is a prime, show it
}
The code using a label:

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}










