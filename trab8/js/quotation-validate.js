/* FORM WIZARD VALIDATION SIGN UP ======================================== */

$('form#custom').attr('action', 'quotation-wizard-send.php');  /* new version 1.1 */

$(function() {
'use strict';
				$('#custom').stepy({
					backLabel:	'Previous step',
					block:		true,
					errorImage:	true,
					nextLabel:	'Next step',
					titleClick:	true,
					description:	true,
					legend:			false,
					validate:	true
				});
				
				
				$('#custom').validate({
	
					errorPlacement: function(error, element) {
						
					$('#custom .stepy-error').append(error);
					}, rules: {
						'firstname_quote':		'required',
						'lastname_quote':		'required',
						'email_quote':		'required',
						'phone_quote':	'required',
						'message_general':		'required',
						'city_quote':			'required',
						'street_quote':			'required',
						'state_quote':			'required',
						'postal_code_quote':			'required',
						'date_quote':			'required',
						'time_quote':			'required',
						'message_quote':			'required',
						'terms':		'required' 	// BE CAREFUL: last has no comma
					}, messages: {
						'firstname_quote':		{ required: 	 'First required' },
						'lastname_quote':		{ required: 	 'Last name required' },
						'email_quote':		{ required: 	 'Email required' },					
						'phone_quote':	{ required:  'Phone required' },
						'message_general':		{ required:  'Description required' },
						'city_quote':			{ required:  'City required' },
						'street_quote':			{ required:  'Street required' },
						'state_quote':			{ required:  'Street required' },
						'postal_code_quote':			{ required:  'Postal code required' },
						'date_quote':			{ required:  'Date required' },
						'time_quote':			{ required:  'Time required' },
						'country_delivery':			{ required:  'Country required' },
						'message_quote':			{ required:  'Message required' },
						'terms':		{ required:  'Please accept terms' },
					},
					submitHandler: function(form) 
					{
					if($('input#website').val().length == 0)
					{ 
					form.submit();
					}
					}
				});

			});
			