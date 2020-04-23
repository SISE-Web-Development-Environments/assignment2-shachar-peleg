function someFunc()
{
	if(validate()==true)
	{
		alert("valid");
		let user=createUser(document.getElementById('register_user').value , document.getElementById('fullname').value , document.getElementById('email').value , document.getElementById('register_password').value, document.getElementById('date').value);
		registerMember(user);
		showandalert('welcome','register');
		return true;
	}
	alert("not valid");
	return false;
}

function registerMember(user) {
	localStorage.setItem(getUserName(user), user);
}

function createUser(pusername , pfullname , pemail , ppassword , pdateOfBirth) {
	var user={username:pusername , fullname:pfullname , email:pemail , password:ppassword , dateOfBirth:pdateOfBirth};
	return user;
}

function getUserName(user) {
	return user.username;
}

function getPassword(user)
{
	return user.password;
}

function checkIfPasswordCorrect() {
	let username=document.getElementById('user').value
	let password=document.getElementById('password').value
	//alert("hey");
	if(username=='p' && password=='p')
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(back.jpg)';
		return show('game','login');
	}
	else
	{
	let newUser = localStorage.getItem(username);
	if(newUser.getPassword()==password)
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(back.jpg)';
		return show('game','login');
	}
}
	alert("user name / password are wrong. try again")
	return false;
}

function checkIfUserNameCorrect(username) {
	var user = localStorage.getItem(username);
	if(user!=null || username==p)
		return true;
	return false;
}


function show(shown, hidden1) {
	if(shown!="game")
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden1).style.display = 'none';
	return false;
}
function showall(shown, hidden1 , hidden2 , hidden3) {
	if(shown!="game")
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden1).style.display = 'none';
	document.getElementById(hidden2).style.display = 'none';
	document.getElementById(hidden3).style.display = 'none';
	return false;
}
function showandalert(shown, hidden1) {
	if(shown!="game")
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	alert("you sucssefuly register to the system")
	document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden1).style.display = 'none';
	return false;
}
