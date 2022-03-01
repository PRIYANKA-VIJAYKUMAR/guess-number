var text1 = document.querySelector("#tex1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");
var result = Math.floor(Math.random() * 10) - 1;
var no_of_guess = 0;
var guessed_num = [];

function guess(){
    var user_num = document.querySelector("#input").value;
    if (user_num < 1 || user_num > 10)
    {
        alert("Enter number between 1-10");
    }
    else
    {
        guessed_num.push(user_num);
        no_of_guess = no_of_guess + 1;
        if (user_num < result)
        {
            text1.textContent = 'Your guesss is low';
            text2.textContent = "Number of guess:" + no_of_guess;
            text3.textContent = "Guessed number:" + guessed_num;
        }
       else if (user_num > result)
        {
            text1.textContent = 'Your guesss is high';
            text2.textContent = "Number of guess:" + no_of_guess;
            text3.textContent = "Guessed number:" + guessed_num;
        }
      else  if (user_num == result)
        {
            text1.textContent = 'Your WON the match';
            text2.textContent = "Number of guess:" + result;
            text3.textContent = "Guessed number is:" + guessed_num;
            }
    }
}