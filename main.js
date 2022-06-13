// //  initialing some values
// let totalAttemps = 5;
// let attemps =0;
// let totalWons=0;
// let totalLost=0;


// //   finding elements

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const guessingNumber = form.querySelector("#guessingNumber");
// const checkButton = form.querySelector("#check");
// const resultText = cardBody.querySelector(".resultText");
// const lostWonMessage = document.createElement("p");
// const reamainingAttemps = cardBody.querySelector("reamainingAttemps");



// form.addEventListener("submit",function(event){
//      event.preventDefault();
     
//      attemps++;
//      if(attemps>5){
//          guessingNumber.disabled =true;
//          checkButton.disabled =true;
//      }if(attemps<5){
//         let guessNumber=Number(guessingNumber.value);
//          checkResult(guessNumber);
//         reamainingAttemps.innerHTML= `Reamaining attems: ${totalAttemps-attemps}`;
//      }
//      guessingNumber.value="";
// });
// function checkResult(guessingNumber){
//     const randomNumber = getRandomNumber(5);
//     if(guessingNumber == randomNumber){
//         resultText.innerHTML = `you have won`;
//         totalWons++;

//     }else{
//         resultText.innerHTML =`You have lost: random number was: ${randomNumber}`;
//         totalLost++;
//         lostWonMessage.classList.add("large-text");
//         cardBody.appendChild(lostWonMessage);
//     }
//     lostWonMessage.innerHTML =`won: ${totalWons}, Lost: ${totalLost}`
// }

// function getRandomNumber(limit){
//     return Math.floor(Math.random()*limit)+1;
// }

