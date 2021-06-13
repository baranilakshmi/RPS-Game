const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const maindiv = document.querySelector('.choices');
const resetdiv = document.querySelector('.reset');

function game(choice){

const mychoice = choice.id;
const botchoice = botselection();
const score = gamescore(mychoice,botchoice);
const gameresult = message(score);
const remove = removechoices();
const frontpage = frontend(mychoice,botchoice,gameresult);

}


function botselection(){

const choice = ['rock','paper','scissors'];
const random = Math.floor(Math.random()*3);
return choice[random];

}


function gamescore(mychoice,botchoice){

const score = {

'rock': {'rock':0.5, 'paper':0, 'scissors':1},
'paper': {'rock':1, 'paper':0.5, 'scissors':0},
'scissors': {'rock':0, 'paper':1, 'scissors':0.5}

}

//console.log(mychoice,botchoice);
return score[mychoice][botchoice];


}

function message(score){

let result;

switch(score){

case 1:
    result = {message: 'YOU WON!', color: 'darkgreen'};
    break;

    case 0.5:
        result = {message: 'YOU TIED!',color: 'darkblue'};
        break;

        case 0:
            result = {message: 'YOU LOSS!',color: 'darkred'};

        
}

return result;
//console.log(result);

}

function removechoices(){

rock.remove();
paper.remove();
scissors.remove();

}

function frontend(mychoice,botchoice,gameresult){

const image = {

'rock':rock.src,
'paper':paper.src,
'scissors':scissors.src
    }

maindiv.innerHTML = `<img class= "final" id="mychoice" src = "${image[mychoice]}" alt="${mychoice}" width='100px' height="100px" />
<h2 class= "final" style="color:${gameresult['color']}">${gameresult['message']}</h2><img class="final" id="botchoice" src="${image[botchoice]}" alt="${botchoice}" width="100px" height="100px"/>`;

resetdiv.innerHTML = `<button onclick= "restart()">Restart</button>`;

}

function restart(){

    location.reload();
}