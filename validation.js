
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
				alphanumeric: true,
				minlength: 6
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
				//minlength: "your password must be at least 6 characters long"
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
jQuery.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 

$(function(){
	$("#userName").focus(function () {
		var first = $("#firstName").val();
		var last=$("#lastName").val();
		if (first&& last && !this.value) {
			this.value = first.append(last);
		}
	});
});
