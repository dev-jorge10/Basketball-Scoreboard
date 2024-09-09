const homeStoreEl = document.getElementById("home-score")
const guestStoreEl = document.getElementById("guest-score")


const homeScoreByOne = document.getElementById("home-score-btn-1")
const homeScoreByTwo = document.getElementById("home-score-btn-2")
const homeScoreByThree = document.getElementById("home-score-btn-3")


const guestScoreByOne = document.getElementById("guest-score-btn-1")
const guestScoreByTwo = document.getElementById("guest-score-btn-2")
const guestScoreByThree = document.getElementById("guest-score-btn-3")

const homeHeader = document.querySelector(".home-section h3");
const guestHeader = document.querySelector(".guest-section h3");


const newBtn = document.getElementById("new-game-btn")



let homeScore = 0
let guestScore = 0



function updateScores() {
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore;
    checkScores();
}

function checkScores() {
    if (homeScore > guestScore) {
        homeHeader.style.color = "#4E9F3D";
        guestHeader.style.color = "#eeeeee"; // Default color
    } else if (guestScore > homeScore) {
        homeHeader.style.color = "#eeeeee"; // Default color
        guestHeader.style.color = "#4E9F3D";
    } else {
        homeHeader.style.color = "#eeeeee"; // Default color
        guestHeader.style.color = "#eeeeee"; // Default color
    }
}



homeScoreByOne.addEventListener("click", function(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
    updateScores();
})

 homeScoreByTwo.addEventListener("click", function(){
     homeScore += 2
     homeStoreEl.textContent = homeScore
     updateScores();
})

 homeScoreByThree.addEventListener("click", function(){
     homeScore += 3
     homeStoreEl.textContent = homeScore
     updateScores();
})



guestScoreByOne.addEventListener("click", function(){
      guestScore += 1
      guestStoreEl.textContent = guestScore
      updateScores();
})

  guestScoreByTwo.addEventListener("click", function(){
     guestScore += 2
     guestStoreEl.textContent = guestScore
     updateScores();
})

 guestScoreByThree.addEventListener("click", function(){
     guestScore += 3
     guestStoreEl.textContent = guestScore
     updateScores();
 })

 newBtn.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent = homeScore
    guestStoreEl.textContent = homeScore
    updateScores();
 })

