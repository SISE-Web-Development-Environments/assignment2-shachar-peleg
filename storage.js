var usernameForDisplay;
	
function login(){
	localStorage.setItem("p","p");
		const loginUser=document.getElementById("user");
		const loginPassword=document.getElementById("password");
		const key=loginUser.value;
		const value=loginPassword.value;
		if(checkIfUserNameCorrect(key)){
			console.log("username correct");
			checkIfPasswordCorrect(key,value);
		}
		return false;
	}

function checkIfPasswordCorrect(username,password) {
	console.log(username.value);	

	let userPassword = localStorage.getItem(username);

	console.log(userPassword);	

	if(userPassword==password)
	{	
		console.log("password is equal");
		usernameForDisplay=username;
		console.log("enter to show setting");
		return showall('setting','login' , 'welcome' , 'register');

	}
	else
	{
		alert("user name / password are wrong. try again")
		return false;
	}	
}


function store(username, password){
	if(!checkIfUserNameCorrect(username)){
		console.log("password" + password);
		localStorage.setItem(username,password);
		
		return showandalert('welcome','register');
	}
	alert("this user name is already exist, please pick another user name");
	return false;
}

function checkIfUserNameCorrect(username) {
	var user = localStorage.getItem(username);
	if(user!=null)
		return true;
	console.log("false");
	return false;
}


function show(shown, hidden1) {
	if(shown!="game")
	{
		console.log("shown is not game");
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	else{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(back.jpg)';
	}
	if(hidden1=='setting')
	{
		console.log("hidden is setting");
		var modal = document.getElementById("setting");
		modal.style.display = "none";
	}
	else{
		document.getElementById(hidden1).style.display = 'none';
	}
	console.log("shown setting now");

	document.getElementById(shown).style.display = 'block';
	console.log("already shown it");

	return true;
}
function showall(shown, hidden1 , hidden2 , hidden3) {
	if(shown!="game")
	{
		exitGame();
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	else{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(back.jpg)';
	}
	document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden1).style.display = 'none';
	document.getElementById(hidden2).style.display = 'none';
	document.getElementById(hidden3).style.display = 'none';
	return true;
}
function showandalert(shown, hidden1) {
	if(shown!="game")
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	else{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(back.jpg)';
	}
	alert("you sucssefuly register to the system")
	document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden1).style.display = 'none';
	return true;
}

function registerNewUser(){
		const un=document.getElementById("userName");
		const pw=document.getElementById("registerPassword");
		const register_btn=document.getElementById("register_btn");
		const key=un.value;
		const value=pw.value;
		store(key,value);
}

