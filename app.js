'use strict'

var q1 = confirm('Guess who is applying for this job!');

var q2 = prompt('Am I female?').toUpperCase();

  if (q2=='YES'){
      alert("Yeah! You are right. I'm a young female.");
    } else {
      alert("Sorry, I'm not a male.");
    }

var q3 = prompt('Do you think I have blonde hair?').toUpperCase();

  if (q3=='YES') {
      alert("Well.. my hair is not in blonde. I have my beautiful dark brown hair.");
    } else {
      alert("Correct! My hair isn't blonde in color.");
    }

var q4 = prompt('Do I speak any language other than English?').toUpperCase();

  if (q4=='YES') {
      alert('You are right. I also speak Cantonese and Mandarin. I guess you now have an idea what my nationality is.');
    } else {
      alert("In fact, I do speak other languages.");
    }

var q5 = prompt('Am I an asian?').toUpperCase();

  if (q5=='YES') {
      alert('Yes! You got it!');
    } else {
      alert("Sorry, wrong guess!");
    }

var q6 = prompt('Can I have an interview with you?').toUpperCase();

  if (q6=='YES') {
      alert("Thank you for offering me this chance!! My contact is written at the bottom of this page. I'm awaiting your call/email.");
    } else {
      alert("I hope you can re-consider my application after seeing the hardwork I've done on writing this page.");
    };

console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);
console.log(q6);
