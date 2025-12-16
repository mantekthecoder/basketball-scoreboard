let homeCountEl = document.getElementById("home-count")
let guestCountEl = document.getElementById("guest-count")

let homeScore = 0
let guestScore = 0

function renderScores() {
    homeCountEl.textContent = homeScore;
    guestCountEl.textContent = guestScore;
  }
  
function addhome1() {
    homeScore += 1
    renderScores()
}
function addhome2() {
    homeScore += 2
    renderScores()
}
function addhome3() {
    homeScore += 3
    renderScores()
}
function addguest1() {
    guestScore += 1
    renderScores()
}
function addguest2() {
    guestScore += 2
    renderScores()
}
function addguest3() {
    guestScore += 3
    renderScores()
}
function newgame() {
  homeScore = 0
  guestScore = 0
  renderScores()
}
function resethome() {
    homeScore = 0
    renderScores()
    
}
function resetguest() {
    guestScore = 0
    renderScores()
    
}
renderScores()




