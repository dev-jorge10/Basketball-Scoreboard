let homeStoreEl = document.getElementById("home-score")
let guestStoreEl = document.getElementById("guest-score")


let homeScoreByOne = document.getElementById("home-score-btn-1")
let homeScoreByTwo = document.getElementById("home-score-btn-2")
let homeScoreByThree = document.getElementById("home-score-btn-3")


let guestScoreByOne = document.getElementById("guest-score-btn-1")
let guestScoreByTwo = document.getElementById("guest-score-btn-2")
let guestScoreByThree = document.getElementById("guest-score-btn-3")

let newBtn = document.getElementById("new-game-btn")

let homeScore = 0
let guestScore = 0




homeScoreByOne.addEventListener("click", function(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
})

 homeScoreByTwo.addEventListener("click", function(){
     homeScore += 2
     homeStoreEl.textContent = homeScore
})

 homeScoreByThree.addEventListener("click", function(){
     homeScore += 3
     homeStoreEl.textContent = homeScore
})



guestScoreByOne.addEventListener("click", function(){
      guestScore += 1
      guestStoreEl.textContent = guestScore
})

  guestScoreByTwo.addEventListener("click", function(){
     guestScore += 2
     guestStoreEl.textContent = guestScore
})

 guestScoreByThree.addEventListener("click", function(){
     guestScore += 3
     guestStoreEl.textContent = guestScore
 })

 newBtn.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent = homeScore
    guestStoreEl.textContent = homeScore
 })