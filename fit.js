let myB = document.getElementById('Button');
let myAsian = document.getElementById('Asian');
let myAge = document.getElementById('age');
let myTall = document.getElementById('tall');
let myResult = document.getElementById('result');
let myWeight = document.getElementById('weight');
let myAm =  document.getElementById('am');
let myMaleB = document.getElementById("male") ;
let myFeMaleB = document.getElementById("female") ;
let myResetB =   document.getElementById("Reset") ;
let f = document.getElementById("f");
let m = document.getElementById("m");
let more;
/*****************************************/

function myReset() {

   myTall.value = "";
   myWeight.value = "";
   myAge.value ="";
   more = 0;
/***************************/
    function myAsianF() {}
	function myArabienF() {}
	function myEuropeanF() {}
	function myNiggerF() {}
	function myFemale() {}
	function myMale() {}
/******************************/
   myAm.style.display = "none";
   document.getElementById("art").style.display ="none";
   document.getElementById("moreI").style.display = "none";
   myResult.innerHTML = "";

}

/***************************************/

function myAsianF() {more = 0; myAm.style.display = "flex"}

function myArabienF() {more = 5; myAm.style.display = "flex"}

function myEuropeanF() {  more = 15;myAm.style.display = "flex"}

function myNiggerF() { more = 20;myAm.style.display = "flex"}

function myFemale() {
	if(f.style.color == "blue" &&   m.style.color == "green"){
		more = more - 10;
	}else if (f.style.color == "green" &&   m.style.color == "blue") {

		more = more + 0;
	}
	myB.disabled = false; 
	f.style.color = "green";
	m.style.color = "blue";
}

function myMale() {

 if (f.style.color == "green" && m.style.color == "blue") { // - 10

 	more = more + 10 // + 10

 }else{
 	more = more + 0 // + 0
 }
	myB.disabled = false; 
	 f.style.color = "blue";
	 m.style.color = "green";
}

/////////////to 10//////////////////////
myB.onclick = function() {	
let kidT = 150;
let kidW = 40;
let kidMW = 55;
/********20*********/
let teenagerT = 160;
let teenagerW = 50;
let teenagerMW = 60;
/********20*********/
let boyT = 170;
let boyW = 55;
let boyMW = 65;
/*********30*****************/
let youngT = 175;
let youngW = 60;
let youngMW= 75;
/**********40****************/
let manT = 170;
let manW = 65;
let manMW = 80;
/***********50*******************/
let oldT = 165;
let oldW = 50;
let oldMW = 60;
/******************************/
    if(isNaN(myAge.value) || isNaN(myTall.value) || isNaN(myWeight.value)  ){

    	myAge.value = `${parseInt(myAge.value)|| "?!"}`;
    	myTall.value = `${parseInt(myTall.value)|| "?!"}`;
    	myWeight.value = `${parseInt(myWeight.value)|| "?!"}`;
    
            
    }else if(myAge.value =="" || myTall.value =="" || myWeight.value ==""){

    	  myResult.innerHTML = "complete your information";
           myResult.style.color = "yellow";
    }
//KID
    else if(Number.parseInt(myAge.value) <= 13 && myTall.value >= kidT + more && myWeight.value >= kidW + more && myWeight.value < kidMW 
//BOY
     || myAge.value < 20 && myTall.value >= teenagerT && myWeight.value >= teenagerW && myWeight.value < teenagerMW 

     || myAge.value <= 20 && myTall.value >= boyT && myWeight.value >= boyW && myWeight.value < boyMW 

//YOUNG
     || myAge.value <= 30 && myTall.value >= youngT && myWeight.value >= youngW && myWeight.value < youngMW 
//MAN

     || myAge.value <= 40 && myTall.value >= manT && myWeight.value >= manW && myWeight.value < manMW 
//OLD
     || myAge.value >= 50 && myTall.value >= oldT && myWeight.value >= oldW  && myWeight.value < oldMW ) 

     {



             myResult.innerHTML = "you are fitness";
             myResult.style.color = "#080";
               
               

     }else {

     	 myResult.innerHTML = "you wont to be fitness";
     	 myResult.style.color = "red";
     	 
     } 
     
     document.getElementById("moreI").classList.toggle("drop");
   
	document.getElementById("moreI").onclick = function(){

		document.getElementById("art").classList.toggle("drop");
//inner
		document.getElementById("artK").innerHTML = `

				if your age from 7 to 10 ? <br>
		  		- should your tall equall ${kidT + more} or more . <br>
		  		 - should your weight from ${kidW + more} to ${kidMW + more}. <br>
		  		- more tall is not bad as more fit.`;

        document.getElementById("artB").innerHTML = `"

				if your age from 10 to 18 ? <br>
		  		- should your tall equall ${boyT + more} or more . <br>
		  		 - should your weight from ${boyW + more} to ${boyMW + more}. <br>
		  		- more tall is not bad as more fit.`;  

    document.getElementById("artYM").innerHTML = `

				if your age from 20 to 27 maybe 37 ? <br>
		  		- should your tall equall ${youngT + more} or more . <br>
		  		 - should your weight from ${youngW + more} to ${manMW + more}. <br>
		  		- more tall is not bad as more fit.`;
	document.getElementById("artO").innerHTML = `

				if your age from 40 to 70 maybe 60 ? <br>
		  		- should your tall equall ${oldT + more} or more . <br>
		  		 - should your weight from ${oldW + more} to ${oldMW + more}. <br>
		  		- more tall is not bad as more fit.`; 



	}

}//butt




	