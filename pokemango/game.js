// current move
var p1 = 0;
var p2 = 0;

// total scores
var p1total = 0;
var p2total = 0;

// playing against ai?
var ai = false;

// multiplayer start
function mpstart(){
    document.getElementById("levelselect").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.title = "Battle!";}

// ai start
function aistart(){
    document.getElementById("levelselect").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.title = "Battle!";
    p2 = (Math.floor(Math.random() * 3) + 1);
    console.log(p2);
    ai = true;}

function reset(){

    // removes previouys turn
    p1 = 0;
    p2 = 0;

    // visual updates
    document.getElementById("counter").textContent=p1total + " : " + p2total;
    document.getElementById("victorytext").textContent="Make your move!";
    document.getElementById("resetButton").style.display = "none";
    
    // rerolls ai
    if (ai) p2 = (Math.floor(Math.random() * 3) + 1);}

// player 1 functions
function p1rock(){
    if (p1 <= 0){
        p1 = 1;
        winner();}}

function p1paper(){
    if (p1 <= 0){
        p1 = 2;
        winner();}}

function p1scissors(){
    if (p1 <= 0){
        p1 = 3;
        winner();}}

// player 2 functions
function p2rock(){
    if (p2 <= 0){
        p2 = 1;
        winner();}}

function p2paper(){
    if (p2 <= 0){
        p2 = 2;
        winner();}}

function p2scissors(){
    if (p2 <= 0){
        p2 = 3;
        winner();}}

function winner(){

    // return if p1 or p2 hasn't played
    if(p1 == 0 | p2 == 0 ) return;

    // tie
    if (p1 == p2) document.getElementById("victorytext").textContent="It's not very effective!";

    // results
    else if (p1 == 1 && p2 == 2){ document.getElementById("victorytext").textContent="Water puts out Fire! Player 2 wins!"; p2total += 1;}
    else if (p1 == 1 && p2 == 3){ document.getElementById("victorytext").textContent="Fire burns Grass! Player 1 wins!"; p1total += 1;}
    else if (p1 == 2 && p2 == 3){document.getElementById("victorytext").textContent="Grass absorbs Water! Player 2 wins!"; p2total +=1;}
    else if (p1 == 2 && p2 == 1){document.getElementById("victorytext").textContent="Water puts out Fire! Player 1 wins!"; p1total +=1;}
    else if (p1 == 3 && p2 == 1){document.getElementById("victorytext").textContent="Fire burns Grass! Player 2 wins!"; p2total +=1;}
    else if (p1 == 3 && p2 == 2){document.getElementById("victorytext").textContent="Grass absorbs Water! Player 1 wins!"; p1total +=1;}

    // show reset button
    document.getElementById("resetButton").style.display = "block";}