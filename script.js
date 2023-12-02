function rollDice() {
    return Math.floor((Math.random() * 6) + 1);
}   

let player1Dice = rollDice();
let player2Dice = rollDice();

let imageFrame1 = document.querySelector(".img1");  
let imageFrame2 = document.querySelector(".img2");

imageFrame1.setAttribute("src", `images/dice${player1Dice}.png`);
imageFrame2.setAttribute("src", `images/dice${player2Dice}.png`);

if (player1Dice > player2Dice) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (player1Dice < player2Dice) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}