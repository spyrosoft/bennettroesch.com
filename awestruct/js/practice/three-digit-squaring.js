var ans;
var out;
var max=900;
var tempMin;
var min=100;
var rcount=0;
var counter;
var corcom=["Excellent!","Correct!","Superb!","Fantastic!","Marvelous!","Admirable!","Ace!","First-class!","Dandy!","Exquisite!","Fantastic!","Golden!","Marvellous!","Outstanding!","Splendid!","Magnificent!","Smashing!","Terrific!","Topnotch!","Tremendous!","Wonderful!","Champion!","First-rate!","Brilliant!","Fabulous!","Stunning!","Commendable!"];

function newProblem() {
	out=parseInt(((max-min+1)*Math.random())+min);
	document.getElementById('out').innerHTML=out + '&sup2;';
	document.getElementById('ans').value="";
	document.getElementById('ans').focus();
}

function check(event) {
	ans=document.getElementById('ans').value;
	if(ans==out*out) {
		newProblem();
		chacom(corcom[rcount]);
		rcount==26?rcount=0:rcount+=1;
		return;
	}
	if (typeof event=="undefined") {event=window.event;}	
	var val=event.keyCode;
	if(val==13) {
		if(ans==out*out) {
			newProblem();
			chacom(corcom[rcount]);
			rcount==26?rcount=0:rcount+=1;
		}
		else if(ans=="") {chacom("Please input a number.");}
		else {
			chacom("Nope.  Not " + ans + ".");
			document.getElementById('ans').value="";
			document.getElementById('ans').focus();
		}
	}
}

function chacom(comment) {
	document.getElementById('comment').innerHTML=comment;
}

function setMin() {
	var txtIn=prompt("Make the minimum:");
	if(txtIn==""||txtIn==null) {return;}
	else if(txtIn!=parseInt(txtIn)) {setMin();}
	else if(parseInt(txtIn)<0) {setMin();}
	else {txtIn=parseInt(txtIn);}
	tempMin=txtIn;
	min=txtIn;
	setMax();
}

function setMax() {
	var txtIn=prompt("Make the maximum:");
	if(txtIn==""||txtIn==null) {min=tempMin;return;}
	else if(txtIn!=parseInt(txtIn)) {setMax();}
	else if(parseInt(txtIn)<min) {setMax();}
	else {txtIn=parseInt(txtIn);}
	max=txtIn;
	newProblem();
}

function harder() {
	max*=2;
	min*=2;
	newProblem();
}

function easier() {
	if(max%2==0&&min%2==0) {max/=2;min/=2;}
	else {max=parseInt(max/2)+1;min=parseInt(min/2)+1;}
	newProblem();
}

newProblem();