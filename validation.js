$().ready(function(){

	$("singupForm").validate({
		rules: {
			fullname:"required",
			username:
			{
				required:true,
				minlength:2
			},
			password:{
				required:true,
				minlength:5
			},
			confirmpassword: {
				required:true,
				minlength:6,
				equalTo:"#password"
			},
			email: {
				required:true,
				email:true
			}
		},
		messages: {
			fullname:"please enter your full name",
			username:{
				required:"please enter a username",
				minlength:"your username must consist of at least 2 characters"
			},
			password:{
				required:"please provide a password",
				minlength:"your password must be at least 6 characters long"
			},
			confirmpassword:{
				required:"please confirm your password",
				equalTo:"please enter the same password as above"
			}

		}
	})
});

$("username").focus(function(){
	var fullname=$("#fullname").val();
	if(fullname && !this.value)
	{
		this.value=fullname;
	}
});