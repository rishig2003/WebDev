var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var imgsrc1="C:/Users/rishi/OneDrive/Desktop/images/dice"+randomnumber1+".png";

var imgsrc2="C:/Users/rishi/OneDrive/Desktop/images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(randomnumber1>randomnumber2){
	document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomnumber2>randomnumber1){
	document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
	document.querySelector("h1").innerHTML="Draw";
}