$( document ).foundation();

$( '#time-dependent-greeting' ).html( generate_day_greeting );

function generate_day_greeting() {
	var now = new Date();
	var hour = now.getHours();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var greeting = '';
	
	if ( hour < 5 ) {
		greeting = 'Good Witching Hour, ';
	} else if ( hour < 12 ) {
		greeting = 'Good Morning, ';
	} else if ( hour < 17 ) {
		greeting = 'Good Afternoon, ';
	} else {
		greeting = 'Good Evening, ';
	}
	
	return greeting + days[ now.getDay() ] + '!';
}

$( '.show-quare-num-version' ).click( show_quare_num_version );

function show_quare_num_version( click_event ) {
	$( '.quare-num-version' ).addClass( 'display-none' );
	try {
		var version = click_event.toElement.value;
	} catch( error ) { return; }
	
	if ( version == '1.0' ) {
		$( '.quare-num-1-dot-0' ).removeClass( 'display-none' );
	} else {
		$( '.quare-num-2-dot-1' ).removeClass( 'display-none' );
	}
}