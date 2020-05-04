
$(function(){
	$("form[name='signupForm']").validate({
		rules: {
			firstName:
				{
					required: true,
					lettersonly: true
				},
				lastName:
				{
					required: true,
					lettersonly: true
				},
				userName:
				{
					required: true,
					minlength: 2
				},
				registerPassword: {
				required: true,
				minlength: 6,
				letterAndNumbers:true
			},
			registerConfirmpassword: {
				required: true,
				minlength: 6,
				equalTo: "#registerPassword"
			},
			email: {
				required: true,
				email: true
			},
			birthdate: {
				required: true
			}
		},messages: {
			firstName: "characters only",
			lastName:"characters only",
			userName: {
				required: "please enter a username",
				minlength: "your username must consist of at least 2 characters"
			},
			registerPassword: {
				required: "please provide a password",
			},
			registerConfirmpassword: {
				required: "please confirm your password",
				equalTo: "please enter the same password as above"
			}
		},
		submitHandler: function(form) {
			form.submit();
		  }
	});
});
jQuery.validator.addMethod("lettersAndNumbersonly", function(value, element) {
	return this.optional(element) || (value.match(/[a-zA-Z]/) || value.match(/[0-9]/)); 
  }, "Letters and numbers only please"); 

  jQuery.validator.addMethod("letterAndNumbers", function(value, element) {
	return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
  }, "Letters and numbers must please"); 


