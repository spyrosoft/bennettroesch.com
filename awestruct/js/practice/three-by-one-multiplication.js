var ans;
var num1;
var num2;
var rcount=0;
var corcom=["Excellent!","Correct!","Superb!","Fantastic!","Marvelous!","Admirable!","Ace!","First-class!","Dandy!","Exquisite!","Fantastic!","Golden!","Marvellous!","Outstanding!","Splendid!","Magnificent!","Smashing!","Terrific!","Topnotch!","Tremendous!","Wonderful!","Champion!","First-rate!","Brilliant!","Fabulous!","Stunning!","Commendable!"];

function newProblem() {
	num1=parseInt((900*Math.random())+100);
	num2=parseInt((7*Math.random())+3);
	docid("num1").innerHTML=num1;
	docid("num2").innerHTML=num2;
	docid("ans").value="";
}

function check(event) {
	if(docid("ans").value!="") {
		chacom("&nbsp;");
	}
	ans=parseFloat(docid("ans").value);
	if(ans==num1*num2) {
		correct();
		return;
	}
	if(typeof event=="undefined") {
		event=window.event;
	}
	var val=event.keyCode;
	if(val==13)	{
		if(ans==num1*num2) {
			correct();
		}
		else {
			if(docid("ans").value=="") {
				chacom("Please input a number.");
			}
			else {
				chacom("Nope, not " + docid("ans").value + ".");
				docid("ans").value="";
			}
		}
	}
}

function correct() {
	newProblem();
	chacom(corcom[rcount]);
	rcount==26?rcount=0:rcount+=1;
}

function chacom(comment) {
	docid("comment").innerHTML=comment;
}

function docid(ID) {
	return document.getElementById(ID);
}

document.getElementById('ans').focus();
newProblem();