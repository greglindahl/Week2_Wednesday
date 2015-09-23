// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

// 2. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.
// 3. Use a variable called "human" to prompt the user to type their choice.
// 4. Define an array called "choices" that consists of "paper", "rock", and "scissors".
// 5. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 6. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console
// 7. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
// 8. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
// 9. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
// 10. Give yourself a high five for completing your first javascript game!
// 11. Use the game you made above and rework it using a switch statement.
// 12. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// 13. Using a loop, log numbers 22-33 in the console.

// 14. Using a similar loop, log numbers 75 to 100, only in increments of five.

// 15. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

// 15. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.

// HEDS ER TALES?
// 16. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 17. Use a while loop to keep flipping the coin until you get tails.
