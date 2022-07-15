
var qty=document.querySelectorAll(".drum").length;

for(var i=0;i<qty;i++){

	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var btnhtml=this.innerHTML;
		makeSound(btnhtml);
		buttonAnimation(btnhtml);
		});

}

document.addEventListener("keypress",function(event){
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(btnhmtl){

	switch(btnhtml){
			case "w":
				var ad1=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3");
				ad1.play();
				break;
			case "a":
				var ad2=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3");
				ad2.play();
				break;
			case "s":
				var ad3=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3");
				ad3.play();
				break;
			case "d":
				var ad4=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3");
				ad4.play();
				break;
			case "j":
				var ad5=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3");
				ad5.play();
				break;
			case "k":
				var ad6=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3");
				ad6.play();
				break;
			case "l":
				var ad7=new Audio("C:/Users/rishi/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
				ad7.play();
				break;
}

function buttonAnimation(currentKey){
	var active=document.querySelector("."+currentKey);
	active.classList.add("pressed");
	setTimeout(function(){
		active.classList.remove("pressed");
	},100);
}