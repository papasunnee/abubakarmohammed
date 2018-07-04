var reel = document.querySelector('.tab_reel');
var tab1 = document.querySelector('.tab1');
var tab2 = document.querySelector('.tab2');
var panel1 = document.querySelector('.tab_panel1');
var panel2 = document.querySelector('.tab_panel2');
var amec = document.querySelector('#amec');

function slideLeft(e) {
	tab2.classList.remove('active');
	this.classList.add('active');
	reel.style.transform = "translateX(0%)";
}

function slideRight(e) {
	tab1.classList.remove('active');
	this.classList.add('active');
	reel.style.transform = "translateX(-50%)";
}

function changeImage(e){
	e.target.src= 'images/ameclogo2.png'
}
function removeImage(e){
	e.target.src= 'images/ameclogo.png'
}
function regInfo(e){
	alert('Registration Begins July 30 2018') ;
}

tab1.addEventListener('click', slideLeft);
tab2.addEventListener('click', slideRight);
amec.addEventListener('mouseover', changeImage);
amec.addEventListener('mouseout', removeImage);
amec.addEventListener('click', regInfo);