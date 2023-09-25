let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let _submitbtn = document.getElementById("submitbtn");


function addition(a,b){
	console.log(a+b);
}
function subtraction(a,b){
	console.log(a-b);
}
function multiply(a,b){
	console.log(a*b);
}
function divide(a,b){
	console.log(a/b);
}


function selectot( a,b,c){
	 if(c=="addition"){
		 addition(a,b);
	 }
	 else if(c=="subtraction"){
		 subtraction(a,b);
	 }
	 else if(c=="multiply"){
		 multiply(a,b);
	 }
	 else if(c=="divide"){
		 divide(a,b);
	 }
	 else{
		  alert("enter the valid number");
	 }
}

function submitbtn(){
        let a = parseInt(input1.value);
		let b = parseInt(input2.value);
		let c =document.getElementById("selectot").value;
		console.log(c);       
		selectot(a,b,c);
}
