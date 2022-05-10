const p1btn = document.querySelector('#p1Btn');
const p2btn = document.querySelector('#p2Btn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display')
let p1Score = 0;
p1btn.addEventListener('click', function(){ //on click run this function on p1btn
p1Score+=1; //adds 1 to p1Score
p1Display.textContent = p1Score; //sets the text to whatever p1 score is
})
let p2Score=0;
p2btn.addEventListener('click', function(){ //on click run this function on p1btn
    p2Score+=1; //adds 1 to p2Score
    p2Display.textContent = p2Score; //sets the text to whatever p2 score is
    })
reset.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
})