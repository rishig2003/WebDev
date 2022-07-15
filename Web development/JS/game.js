
var colours=["red","green","blue","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;


$(document).keypress(function(){
	if(!started){
		$("#level-title").text("Level "+level);
		nextSequence();
		started=true;
	}
});



$(".btn").click(function(){
	var userChosenColour=$(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
});

function checkAnswer(currentLevel){
	if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
		console.log("right");
		if(userClickedPattern.length==gamePattern.length){
			setTimeout(function(){
				nextSequence();
			},1000);
		}
	}
	else{
		playSound("wrong");
		$("body").addClass("game-over");
		setTimeout(function(){
			$("body").removeClass("game-over");
		},200);
		$("h1").text("Game over.Press a key to restart");
		startOver();
		console.log("wrong");
	}
}

function nextSequence(){
	userClickedPattern=[];
	level+=1;
	$("#level-title").text("Level "+level);
	var randomNumber=Math.floor(Math.random()*4);
	var randomColour=colours[randomNumber];
	gamePattern.push(randomColour);
	$("#"+randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomColour);

}

function playSound(name){
	var audio=new Audio("C:/Users/rishi/Downloads/Simon+Game+Challenge+Starting+Files/Simon Game Challenge Starting Files/sounds/"+name+".mp3");
	audio.play();
}


function animatePress(chosen){
	$("#"+chosen).addClass("pressed");
	setTimeout(function(){
		$("#"+chosen).removeClass("pressed");
	},100);
}

function startOver(){
	level=0;
	started=false;
	gamePattern=[];
}