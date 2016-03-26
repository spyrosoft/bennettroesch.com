var digits = 4;
var all_digits = [];
var test = '';
var step = 0;
var quizzing = false;
var level = 0;
var audio_only = false;
var audio_directory = '';
var audio_extension = '.mp3';
var previous_correct_numbers = '';
var previous_correct_numbers_timeout;

function new_problem() {
	level++;
	if (level >= digits/3) {
		comment('Level Up');
		digits += 1;
		level = 0;
	}
	previous_correct_numbers = '';
	all_digits = new Array();
	for (var counter = 0; counter < digits; counter++) {
		all_digits[counter] = parseInt(Math.random()*10);
	}
	step = 0;
	prompt_number(all_digits[step]);
    //preload_audio(all_digits[step + 1], all_digits[step + 2]);
	change_counter();
	hidden('input');
	document.getElementById('next').focus();
}

function check_input() {
	var input = document.getElementById('in').value;
	if (input.length > 1) {
		handle_too_many_input_digits();
	} else if (input.length == 0) {
		return;
	} else {
		clearTimeout(previous_correct_numbers_timeout);
		if (input == all_digits[step].toString()) {
			previous_correct_numbers += input;
			comment(previous_correct_numbers);
			flash('comment');
            if (audio_only) {
                prompt_number('good');
            }
			empty_input();
			step++;
			if (step == digits) {
				comment('You win! New problem!');
				new_problem();
				return;
			}
		} else {
			comment('Nope');
			previous_correct_numbers_timeout = setTimeout('comment(previous_correct_numbers);', 500);
			if (audio_only) {
				prompt_number('nope');
			}
			empty_input();
		}
	}
}

function next_digit() {
	step++;
	if (step == digits) {
		start_quiz();
		return;
	}
	prompt_number(all_digits[step]);
    if (audio_only) {
        preload_audio(all_digits[step + 1], all_digits[step + 2]);
    }
	change_counter();
	comment('&nbsp;');
}

function start_quiz() {
	step = 0;
	visibile('input');
    document.getElementById('out').innerHTML = '&nbsp;';
	document.getElementById('in').focus();
}

function on_enter_change_number_of_digits(event) {
	if (typeof event=='undefined') event = window.event;
	var val = event.keyCode;
	if (val == 13) change_number_of_digits();
}

function change_number_of_digits() {
	var input = document.getElementById('digits').value;
	if (parseInt(input) == input && input >= 1) {
		digits = parseInt(input);
		level = -1;
		new_problem();
	}
	document.getElementById('digits').value='';
	comment('&nbsp;');
}

function start_quiz_from_the_beginning() {
	step = 0;
	hidden('input');
	document.getElementById('next').focus();
	prompt_number(all_digits[step]);
	change_counter();
	comment('&nbsp;');
	hidden('optionsMenu');
}

function handle_too_many_input_digits() {
	empty_input();
	comment('Too many digits. Try again.');
}

function show_options() {
	hidden('instructionsMenu');
	visibile('optionsMenu');
	document.getElementById('start_quiz_from_the_beginningBtn').focus();
}
function show_instructions() {
	hidden('optionsMenu');
	visibile('instructionsMenu');
	document.getElementById('instructionsX').focus();
}

function load(file) {
	if ( ! file) return;
	document.getElementById('player').innerHTML =
		'<embed src="'
		+ audio_directory
		+ file
        + audio_extension
		+ '" volume="100" type="audio/wav" autostart="true" hidden="true"></embed>';
}

function preload_audio(file1, file2) {
	if (file1) {
		document.getElementById('preload').innerHTML =
			'<embed src="'
			+ audio_directory
			+ file1
            + audio_extension
			+ '" volume="100" type="audio/wav" autostart="false" hidden="true"></embed>';
	}	
	if (file2) {
		document.getElementById('preload2').innerHTML =
			'<embed src="'
			+ audio_directory
			+ file2
            + audio_extension
			+ '" volume="100\" type="audio/wav" autostart="false" hidden="true"></embed>';
	}
}

function clear_load_area() {
	document.getElementById("player").innerHTML="";
	document.getElementById("preload").innerHTML="";
	document.getElementById("preload2").innerHTML="";
}

function check_for_hotkey(event) {
	if (typeof event == "undefined") event = window.event;
	var val = event.keyCode;
	if (val == 27) show_options();
}

function toggle_audio_and_text() {
	audio_only = ! audio_only;
	var audio_or_text;
	if (audio_only) {
		audio_or_text = 'Text';
        document.getElementById('out').innerHTML = '&nbsp';
	} else {
		audio_or_text = 'Audio';
	}
	document.getElementById('audio_or_text').value = audio_or_text;
    hidden('optionsMenu');
    step--;
    next_digit();
    document.getElementById('next').focus();
}

function empty_input() {
	document.getElementById('in').value='';
}

function prompt_number(number) {
	if (audio_only) {
		load(number);
	} else {
		document.getElementById('out').innerHTML = number;
	}
}

function change_counter() {
	document.getElementById('counter').innerHTML = (1 + step) + ' of ' + digits;
}

function visibile(item) {
	document.getElementById(item).style.visibility = 'visible';
}

function hidden(item) {
	document.getElementById(item).style.visibility = 'hidden';
}

function comment(comment) {
	document.getElementById('comment').innerHTML = comment;
}

var flashSet=['#BBB','#AAA','#999','#888','#777','#666','#555','#444','#333','#222','#111',''];
var counterFlash=0;

function flash(text) {
	document.getElementById(text).style.backgroundColor=flashSet[counterFlash];
	if (counterFlash != flashSet.length-1) {
		counterFlash+=1;
		setTimeout('flash(\''+text+'\')', 30);
	} else {
		counterFlash=0;
	}
}

document.onkeydown = check_for_hotkey;
new_problem();