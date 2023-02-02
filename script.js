'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// V:74 IMPORTANT:

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        // document.querySelector('.message').textContent =
        //     '🎉 Correct Number!';
        console.log(guess, typeof guess);

        //When there is no input
        if (!guess) {
            document.querySelector('.message').textContent =
                '⛔ No number!';

            //When Player wins      
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent =
                '🎉 Correct Number!';

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';
            //When guess is too high      
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '👆 Too High!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent =
                    '💀 Game Over!';
                document.querySelector('.score').textContent = 0;
            }

            //When guess is too low 
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '👇 Too Low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent =
                    '💀 Game Over!';
                document.querySelector('.score').textContent = 0;
            }

        }
    });


// else if (guess - secretNumber === 1) {
//     document.querySelector('.message').textContent =
//         '👆 High!';
//     score--;
//     document.querySelector('.score').textContent = score;

// }

// const array2 = [Math.trunc(Math.random() * 6) + 1];
// const array3 = [Math.trunc(Math.random() * 6) + 1];
// const number4 = array2.concat(array3);
// console.log(number4, array2[0] + array3[0]);