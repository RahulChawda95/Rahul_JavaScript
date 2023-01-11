
var image=document.getElementsByTagName('img')
console.log(image)
var but1=document.getElementById('bt1')
var but2=document.getElementById('bt2')
var but3=document.getElementById('bt3')
var but4=document.getElementById('bt4')
var but5=document.getElementById('bt5')


var index=0;

function slider()
{
	for(i=0;i<image.length;i++)
	{
		image[i].style.display="none";
	}	
}	
slider()
image[0].style.display="block"
but1.style.background="gray"
function first() 
{
	but1.style.background="gray"
	but2.style.background="white"
	but3.style.background="white"
	but4.style.background="white"
	but5.style.background="white"

	image[0].style.display="block"
	image[1].style.display="none"
	image[2].style.display="none"
	image[3].style.display="none"
	image[4].style.display="none"
	
}
function second() 
{
	but1.style.background="white"
	but2.style.background="gray"
	but3.style.background="white"
	but4.style.background="white"
	but5.style.background="white"


	image[0].style.display="none"
	image[1].style.display="block"
	image[2].style.display="none"
	image[3].style.display="none"
	image[4].style.display="none"
}
function third() 
{
	but1.style.background="white"
	but2.style.background="white"
	but3.style.background="gray"
	but4.style.background="white"
	but5.style.background="white"


	image[0].style.display="none"
	image[1].style.display="none"
	image[2].style.display="block"
	image[3].style.display="none"
	image[4].style.display="none"
	
}
function forth() 
{
	but1.style.background="white"
	but2.style.background="white"
	but3.style.background="white"
	but4.style.background="gray"
	but5.style.background="white"
	
	image[0].style.display="none"
	image[1].style.display="none"
	image[2].style.display="none"
	image[3].style.display="block"
	image[4].style.display="none"

}
function fifth() 
{
	but1.style.background="white"
	but2.style.background="white"
	but3.style.background="white"
	but4.style.background="white"
	but5.style.background="gray"
	
	image[0].style.display="none"
	image[1].style.display="none"
	image[2].style.display="none"
	image[3].style.display="none"
	image[4].style.display="block"
}