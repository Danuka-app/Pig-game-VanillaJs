var scores,round,activePlayer,gamePlaying;

var lastDies=0;


console.log(lastDies);
var marks =document.querySelector('.final-score');
var initFuction = function (){
    scores = [0,0];
    round =0;
    activePlayer=0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('#name-0').textContent = 'Player-1';
    document.querySelector('#name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    marks.value =0;

}

initFuction();




var x = document.querySelector('#score-0').textContent;

var dice1 = document.querySelector('.dice');
dice1.style.display = 'none';
var dice2= document.querySelector('#dice-2').style.display='none';

var togglePlaye = function (){
    activePlayer===0?activePlayer =1:activePlayer=0;
    round=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    dice1.style.display = 'none';
}


document.querySelector('.btn-roll').addEventListener('click',function (){
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6) +1;
        console.log(count);
        dice1.style.display = 'block';
        dice1.src = 'img/dice-' + dice + '.png';

        if(dice !== 1){
            round += dice;
            document.querySelector('#current-' + activePlayer).textContent = round;
            count=0;
        } else if(lastDies ==6 && dice ==6){

        } else{
            togglePlaye();
        }

        lastDies=dice;
    }



});

document.querySelector('.btn-hold').addEventListener('click',function (){
    if(gamePlaying){
        scores[activePlayer] += round;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >=marks.value){
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';

            dice1.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }else{
            togglePlaye();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click',initFuction);

