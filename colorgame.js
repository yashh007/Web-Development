var totalsquares=6;
var colors= generatearraycolors(totalsquares);
var correctcolor= colors[choosecolor()];
var headSpan= document.querySelector("#headingSpan");
var squares= document.querySelectorAll(".square");
var h1=document.querySelector("#headcontainer");
var ptag=document.querySelector("#spanning");
var clickedbutton = document.querySelector("button");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var buttons = document.querySelectorAll("button");


headSpan.textContent= correctcolor;

clickedbutton.addEventListener("click",function(){
	colors= generatearraycolors(totalsquares);
	correctcolor= colors[choosecolor()];
	headSpan.textContent= correctcolor;
	for(var i=0;i<colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	clickedbutton.textContent="NEW COLORS"
})


for(var i=0;i<colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
}

for(var i=0;i<colors.length; i++)
{
	squares[i].addEventListener("click",function(){

		if(this.style.backgroundColor === correctcolor)
		{	
			for(var j=0;j<colors.length; j++)
				squares[j].style.backgroundColor = correctcolor;
			h1.style.backgroundColor = correctcolor;
			ptag.textContent="Correct";
			clickedbutton.textContent="PLAY AGAIN"
		}	
		else
		{
			this.style.backgroundColor = "black";
			ptag.textContent="Try again";

		}
	});
}

function choosecolor(){
	var noo= Math.floor(Math.random() * colors.length);
	return noo;
}
function generatearraycolors(num){
	var arr=[];
	for(var k=0;k<num;k++)
	{
		arr.push(singlecolorgenerator());
	}
	return arr;
}
function singlecolorgenerator()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " +b + ")" ;
}

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	totalsquares=3;
	colors= generatearraycolors(totalsquares);
	correctcolor= colors[choosecolor()];
	headSpan.textContent= correctcolor;
	h1.style.backgroundColor = "steelblue";
	for(var i=0;i<colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	squares[0].style.display ="block";
	squares[1].style.display ="block";
	squares[2].style.display ="block";
	squares[3].style.display ="none";
	squares[4].style.display ="none";
	squares[5].style.display ="none";

});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	totalsquares=6;
	h1.style.backgroundColor = "steelblue";
	colors= generatearraycolors(totalsquares);
	correctcolor= colors[choosecolor()];
	headSpan.textContent= correctcolor;
	for(var i=0;i<colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display ="block";
	}
});