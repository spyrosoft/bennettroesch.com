(function() {
	var days = [ 'Sunday!', 'Monday!', 'Tuesday!', 'Wednesday!', 'Thursday!', 'Friday!', 'Saturday!' ];
	var date = new Date();
	var hour = date.getHours();
	var greeting = '';
	
	if ( hour < 5 ) {
		greeting = 'Good witching hour, ';
	} else if ( hour < 12 ) {
		greeting = 'Good morning, ';
	} else if ( hour < 17 ) {
		greeting = 'Good afternoon, ';
	} else {
		greeting = 'Good evening, ';
	}
	
	greeting += days[date.getDay()];
	
	$( '.time-dependent-greeting' ).html( greeting );
}());