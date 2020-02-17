$(document).ready(function(){
console.log("page loaded")


buttonObject = document.getElementById("mybutton")
header = document.getElementById("header")

buttonFunction = function(){
	console.log("button is clicked!")
	myName = document.getElementById("myname").value
	console.log(myName)
	header.innerHTML = "Welcome to " + myName + "'s website!"
}


buttonObject.onclick =  buttonFunction




});