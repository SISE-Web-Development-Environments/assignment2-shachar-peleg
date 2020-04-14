	$('form[id="signupForm"]').validate({
		rules: {
			fullname:
			{
				required:true,
				accept:'[a-zA-Z]+'
			},
			register_user:
			{
				required:true,
				minlength:2
			},
			register_password:{
				required:true,
				minlength:5
			},
			register_confirmpassword: {
				required:true,
				minlength:6,
				equalTo:"#password"
			},
			email: {
				required:true,
				email:true
			},
			birthdate: {

                required: true

            }
		},
		messages: {
			fullname:"please enter your full name",
			register_user:{
				required:"please enter a username",
				minlength:"your username must consist of at least 2 characters"
			},
			register_password:{
				required:"please provide a password",
				minlength:"your password must be at least 6 characters long"
			},
			register_confirmpassword:{
				required:"please confirm your password",
				equalTo:"please enter the same password as above"
			}

		},
		submitHandler: function(form) {
			form.submit();
		  }
	});

$("username").focus(function(){
	var fullname=$("#fullname").val();
	if(fullname && !this.value)
	{
		this.value=fullname;
	}
});


if ($("#signupForm").validate()) {

	addUser(new User($("#fullname").val(), $("#username").val(), $("#password").val(), $("#remail").val(), $("#rbirth").val()));
};

