//Challenge 1 : Your age in days

function ageInDays()
{
    var birthyear=prompt("Enter birth year:");
    var ageindays=(2018-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode("You are "+ageindays +"days old");
    h1.setAttribute('id','age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset()
{
    document.getElementById('age').remove();
}

//challenge 2:Cat generation
function catGen()
{
   var image=document.createElement('img');
    image.setAttribute('src','data:image/jpeg;base64,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')
    var div=document.getElementById('catresult');
    div.appendChild(image);
   
   

}

//challenge 3: Rock,Paper,Scissor
function rpsGame(yourChoice)
{
    console.log(yourChoice);
    var humanCh,botch;
    humanCh=yourChoice.id;
    botch=  numberChoice(randRPSInit());
     console.log("Computer choice is:" +botch);
     result=decideWinner(humanCh,botch);
     console.log(result);
     message=finalMessage(result);
     console.log(message);
     rpsFrontend(yourChoice.id,botch,message);
}

function randRPSInit()
{
    return Math.floor(Math.random() * 3);
}

function numberChoice(number)
{
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice)
{
    var rpsDatabase={
        
            "rock":{"paper":0,"rock":0.5,"scissor":1},
            "paper":{"scissor":0,"paper":0.5,"rock":1},
            "scissor":{"rock":0,"scissor":0.5,"paper":1}
        
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function finalMessage([yourScore, computerScore])
{
    if ( yourScore === 0 )
    {
        return {'message':'You lost!','color':'red'};
    }
    else if( yourScore === 0.5 ) 
    {
        return {'message':'You Tied','color':'yellow'};
    }
    else
    {
        return {'message':'You won!','color':'green'};
    }
}


function rpsFrontend(humanImageChoice,botImageChoice,finalMessage)
{
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    };

    //Remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var msgDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice] +"'>";
    //msgDiv.innerHTML="<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding:30px;'>"+finalMessage['messaage'] + "</h1>";
    msgDiv.innerHTML=finalMessage['message'];
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice] +"'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(msgDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}   