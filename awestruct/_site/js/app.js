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

$( 'form.contact' ).submit( contact_form_submission );

function contact_form_submission( submission_event )
{
	submission_event.preventDefault();
	$( 'form.contact button' ).attr( 'disabled', true );
	var contact_submission_name = $( 'form.contact [name=name]' ).val();
	var contact_submission_subject = $( 'form.contact [name=subject]' ).val();
	var contact_submission_email = $( 'form.contact [name=email]' ).val();
	var contact_submission_message = $( 'form.contact [name=message]' ).val();
	if ( contact_submission_message === '' )
	{
		alert( 'The Message field is required.' );
		$( 'form.contact [name=message]' ).focus();
		return;
	}
	var contact_sumbission_object = new Object;
	contact_sumbission_object[ 'name' ] = contact_submission_name;
	contact_sumbission_object[ 'subject' ] = contact_submission_subject;
	contact_sumbission_object[ 'email' ] = contact_submission_email;
	contact_sumbission_object[ 'message' ] = contact_submission_message;
	$.post( '/contact-ajax/', contact_sumbission_object )
		.done(
			function() {
				$( 'form.contact button' ).attr( 'disabled', false );
			}
		)
		.success(
			function( response_data ) {
				var response_json;
				try {
					response_json = JSON.parse( response_data );
					if ( response_json[ 'success' ] ) {
						alert( 'Thank you for contacting me!'  );
						$( 'form.contact [name=name]' ).val( '' );
						$( 'form.contact [name=subject]' ).val( '' );
						$( 'form.contact [name=email]' ).val( '' );
						$( 'form.contact [name=message]' ).val( '' );
					} else {
						contact_form_failed();
					}
				} catch ( error ) { contact_form_failed(); }
			}
		)
		.fail(
			function() {
				alert( 'Connection with the server failed. Please check your internet connection. Otherwise, something is wrong on our end - please try again later.' );
			}
		);
}

function contact_form_failed() {
	alert( 'Something went wrong. Please contact Bennett by some other means and tell him his contact form is broken.' );
}