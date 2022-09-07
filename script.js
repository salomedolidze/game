'use strict';

// document.querySelector(".number").textContent=secretNumber;
// let secret=document.querySelector(".number").textContent=Math.floor(Math.random()*20);
let secretNumber=Math.floor(Math.random()*20)
let score=20
// console.log(secretNumber)
let again=document.querySelector("#again")
again.addEventListener("click",function(){
    document.querySelector(".message").textContent="start guessing";
    document.querySelector("body").style.backgroundColor="#222";
    secretNumber=Math.floor(Math.random()*20)
    score=20
    document.querySelector('.score').textContent = 20;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=""



})


// let guess=Number(document.querySelector(".guess").value);
let check=document.querySelector(".check");
check.addEventListener("click",function(){
    let guess=Number(document.querySelector(".guess").value);
    score--
    // console.log(score);
    document.querySelector(".score").textContent=score
    if(guess==secretNumber){
        document.querySelector(".message").textContent="correct";
        document.querySelector("body").style.backgroundColor="#60b347"
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector(".highscore").textContent=score
        
    } else if(guess>secretNumber){
        document.querySelector(".message").textContent="high"
    } else if(guess<secretNumber){
        document.querySelector(".message").textContent="low"
    }
    if  (score<=0){

        document.querySelector(".message").textContent="game over"
              document.querySelector('.score').textContent = 0;

    }
    
})





