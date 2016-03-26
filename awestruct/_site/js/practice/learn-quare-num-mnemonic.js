var ans;
var num;
var randomNum;
var lastNum;
var qPrompt;
var QuareNum=["R","N","T","SH","CH","F","B","V","M","K","P","S","Z","D","J","L"];
var DecimalNum=[0,1,2,3,3,4,4,5,5,6,6,7,7,8,8,9];
var flashSet=["#BBB","#AAA","#999","#888","#777","#666","#555","#444","#333","#222","#111","#000"];
var counterFlash=0;

function newProb() {
	while(randomNum==num) {genRandomNum();}
	num=randomNum;
	if(qPrompt==true) {document.getElementById("num").innerHTML=QuareNum[num];}
	else {document.getElementById("num").innerHTML=DecimalNum[num];}
	document.getElementById("ans").value="";
}

function genRandomNum() {
	randomNum=parseInt(Math.random()*16);
	if(parseInt(Math.random()*2)==1) {qPrompt=true;} //50% chance
	else {qPrompt=false;}
}

function check() {
	ans=document.getElementById("ans").value;
	if(ans=="") return;
	else if(qPrompt) {
		if(isNaN(ans)==true) {nope();}
		else if(ans==DecimalNum[num]) {correct();}
		else nope();
	}
	else {
		ans=ans.toUpperCase();
		if(num==3||num==4) {
			if(ans.length==1) {
				if(ans!=QuareNum[num].charAt(0)) {
					if(num==3&&ans==QuareNum[4].charAt(0)) {otherOne();}
					else if(num==4&&ans==QuareNum[3].charAt(0)) {otherOne();}
					else nope();
				}
			}
			else if(ans.length==2&&ans!=QuareNum[num]) {
				if(num==3&&ans==QuareNum[4]) {otherOne();}
				else if(num==4&&ans==QuareNum[3]) {otherOne();}
				else nope();
			}
			else if(ans.length>2) {nope();}
			else {correct();}
		}
		else if(num>4&&num<15) {
			if(num%2==0) {
				if(ans==QuareNum[num-1]) {otherOne();}
				else if(ans==QuareNum[num]) {correct();}
				else nope();
			}
			else {
				if(ans==QuareNum[num+1]) {otherOne();}
				else if(ans==QuareNum[num]) {correct();}
				else nope();
			}
		}
		else {
			if(ans.length>1) {nope();}
			else if(ans!=QuareNum[num]) {nope();}
			else {correct();}
		}
	}
}

function nope() {
	chacom("Nope");
	document.getElementById("ans").value="";
}

function correct() {
	chacom("Correct!!<br /><br />"+QuareNum[num]+" = "+DecimalNum[num]);
	flash();
	newProb();
}

function otherOne() {
	chacom("I'm Thinking Of<br />The Other One.");
	document.getElementById("ans").value="";
}

function chacom(comment) {document.getElementById("comment").innerHTML=comment;}

function flash() {
	document.getElementById("comment").style.backgroundColor=flashSet[counterFlash];
	if(counterFlash!=17) {
		counterFlash+=1;
		setTimeout("flash()", 30);
	}
	else {counterFlash=0;}
}

chacom("Input the corresponding number or sound.");
document.getElementById('ans').focus();
newProb();