
'use strict';


function whoApply(){
  var q1 = confirm('Guess who is applying for this job!');
  return q1;
}
  var fCallWhoApply=whoApply();
  console.log(fCallWhoApply);


function female(){
  var q2 = prompt('Am I female?').toUpperCase();
  if (q2=='YES'){
    alert("Yeah! You are right. I'm a young female.");
    } else {
    alert("Sorry, I'm not a male.");
    }
  return q2;
}
  var fCallFemale = female();
  console.log(fCallFemale);


function blondeHair(){
  var q3 = prompt('Do you think I have blonde hair?').toUpperCase();
  if (q3=='YES') {
    alert("Well.. my hair is not in blonde. I have my beautiful dark brown hair.");
    } else {
    alert("Correct! My hair isn't blonde in color.");
    }
  return q3;
}

  var fCallBlondeHair=blondeHair();
  console.log(fCallBlondeHair);


function language(){
  var q4 = prompt('Do I speak any language other than English?').toUpperCase();
  if (q4=='YES') {
    alert('You are right. I also speak Cantonese and Mandarin. I guess you now have an idea what my nationality is.');
    } else {
    alert("In fact, I do speak other languages.");
    }
    return q4;
}
  var fCallLanguage=language();
  console.log(fCallLanguage);


function asian(){
  var q5 = prompt('Am I an asian?').toUpperCase();
  if (q5=='YES') {
    alert('Yes! You got it!');
    } else {
    alert("Sorry, wrong guess!");
    }
    return q5;
}
  var fCallAsian=asian();
  console.log(fCallAsian);


function age(){
  var q6UserGuess = prompt('Guess how old am I?');
  var q6HitAnswer = true;
  var q6MyAnswer = 29;

  for (var q6=4; q6>0 && q6HitAnswer; q6--) {
    if (q6UserGuess==q6MyAnswer){
      alert('Oh my god! You have a good guess!');
      q6HitAnswer=false;
    } else if (q6===1) {
        alert("Sorry, None of the guesses is correct. I'm actually 29 year-old. ");
      } else {
          q6UserGuess=prompt('Try Again!');
          if (q6UserGuess==q6MyAnswer) {
            alert("Yay! You've finally got it!");
            }
        }
  }
  return q6UserGuess;
}
  var fCallAge = age();
  console.log(fCallAge);



function citiesVisited(){
  var q7UserGuess = prompt('I love to travel.  Guess what cities I have been visited?  You have 6 tries!');
  var q7PossibleCities = ['HONG KONG', 'JAPAN','KOREA','VIETNAM','THAILAND','TAIWAN','SINGAPORE'];
  var q7HitAnswer = true;
  var q7;
  var q7searchCity;

  for (q7=6; q7>0 && q7HitAnswer; q7--) {
      for (q7searchCity=0; q7searchCity<q7PossibleCities.length; q7searchCity++) {
          if (q7UserGuess.toUpperCase()==q7PossibleCities[q7searchCity]) {
            alert("Brilliant! You got it again!");
            q7HitAnswer=false;
          }
      }

      if (q7HitAnswer===true) {
        if (q7===1){
            alert("Well, in fact answers have been shown on the prompt!");
        } else {
            q7UserGuess=prompt('Getting Close! How about you try to guess one between Taiwan, Korea, Japan, Hong Kong, Singapore and Vietnam.');
          }
      }
    }
}
citiesVisited();




function interview(){
  alert("One last question ...");

  var q9 = prompt('Can I have an interview with you?').toUpperCase();
  if (q9=='YES')
   {
     alert("Thank you for offering me this chance!! My contact is written at the bottom of this page. I'm awaiting your call/email.");
   } else {
     alert("I hope you can re-consider my application after seeing the hardwork I've done on writing this page.");
   }
}
  /* var fCallInterview = interview(); */
  /* console.log(fCallInterview); */
  interview();
