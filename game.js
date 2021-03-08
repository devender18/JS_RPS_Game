function rpsGame(yourChoice){
    //console.log(yourChoice);
    //console.log(yourChoice.src);
    var humanChoice,botChoice;
    
    
    humanChoice = yourChoice.id;
    botChoice= numberToChoice(randomToRpsInt());
    // console.log(humanChoice+' :human');
    console.log(botChoice+' :bot');
    result = decideWinner(humanChoice, botChoice); //[1,0]--> human won bot loss
    console.log(result);
    var message = finalMessage(result); // {message: 'you won', color: 'green'}  
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}

function randomToRpsInt(){
     return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'] [number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabse = {
        'rock': { 'scissors':1, 'rock':0.5, 'paper':0},
        'paper': { 'scissors':0, 'rock':1, 'paper':0.5},
        'scissors': { 'scissors':0.5, 'rock':0, 'paper':1}
    }

    var yourScore = rpsDatabse[yourChoice][computerChoice];
    var computerScore = rpsDatabse[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!','color':'red'};
    }else if(yourScore === 0.5){
        return {'message': 'Tied!', 'color':'yellow'};
    }else{
        return {'message': 'You Won!', 'color':'green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    

    // let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] +"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 10)'>";

    document.getElementById('s_app').appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style = 'color: "+ finalMessage['color']+ "; font-size: 60px; padding: 30px; '>" +finalMessage['message']+"</h1>";

    document.getElementById('r_app').appendChild(messageDiv);  

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 10)'>";

    document.getElementById('p_app').appendChild(botDiv);  

}