$( document ).foundation();

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