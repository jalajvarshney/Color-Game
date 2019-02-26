var num = 6;
var colors = randColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*num)];
var toDisplay = document.querySelector("#display");
toDisplay.textContent = pickedColor;

var but = document.querySelector("#newcol");
but.addEventListener("click", loadNewCol);

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click", function(){
	num = 3;
	loadNewCol();
	easy.classList.add("selected");
	hard.classList.remove("selected");
});

hard.addEventListener("click", function(){
	num = 6;
	loadNewCol();
	hard.classList.add("selected");
	easy.classList.remove("selected");
});
for(var i=0; i<num; i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.background==pickedColor)
		{
			changeColors(pickedColor);
			document.querySelector("#message").textContent="Correct!!";
			document.querySelector("h1").style.background=pickedColor;
			but.textContent = "Play Again ?"
		}
		else
		{
			this.style.background = "#232323";
			document.querySelector("#message").textContent="Try Again";
		}
	});
}


function randColors(num)
{
	var arr = [];
	for(var i=0; i<num; i++)
	{
		var a = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var c = Math.floor(Math.random()*256);
		var str = "rgb("+a+", "+b+", "+c+")";
		arr.push(str);
	}
	return arr;
}

function changeColors(col)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = col;
	}
}

function loadNewCol(){
	but.textContent = "new colors";
	document.querySelector("#message").textContent="";
	colors = randColors(num);
	document.querySelector("h1").style.background= "steelblue" ;
	pickedColor = colors[Math.floor(Math.random()*num)];
	toDisplay.textContent = pickedColor;
	for(var i=0; i<6; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}