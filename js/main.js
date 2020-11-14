var scores,round,activePlayer;

scores = [0,0];
round =0;
activePlayer=0;


var btn_Hold = document.querySelector('.btn-hold');

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var x = document.querySelector('#score-0').textContent;
console.log(x);
var dice1 = document.querySelector('.dice');
dice1.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function (){
    var dice = Math.floor(Math.random()*6) +1;
    dice1.style.display = 'block';
    dice1.src = 'img/dice-' + dice + '.png';

    if(dice !== 1){
        round += dice;
        document.querySelector('#current-' + activePlayer).textContent = round;
    }else{
        activePlayer===0?activePlayer =1:activePlayer=0;
        round=0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        dice1.style.display = 'none';
    }

});