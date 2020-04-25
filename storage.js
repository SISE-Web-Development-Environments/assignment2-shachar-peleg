

function checkIfPasswordCorrect(username,password) {
	console.log(username.value);	

	let userPassword = localStorage.getItem(username);

	console.log(userPassword);	

	if(userPassword==password)
	{
		//var body = document.getElementsByTagName('body')[0];
		//body.style.backgroundImage = 'url(back.jpg)';
		return show('setting','login');
		//debugger;

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
	return false;
}


function show(shown, hidden1) {
	if(shown!="game")
	{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(4.jpg)';
	}
	else{
		var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = 'url(back.jpg)';
	}
	if(hidden1=='setting')
	{
		var modal = document.getElementById("setting");
		modal.style.display = "none";
	}
	else{
		document.getElementById(hidden1).style.display = 'none';
	}
	document.getElementById(shown).style.display = 'block';
	return false;
}
function showall(shown, hidden1 , hidden2 , hidden3) {
	if(shown!="game")
	{
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
	return false;
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
	return false;
}



	/*
	register_btn.onclick=function(){
		const un=document.getElementById("userName");
		const pw=document.getElementById("registerPassword");
		const register_btn=document.getElementById("register_btn");
		const key=un.value;
		const value=pw.value;
		store(key,value);
	};
*/

	
	function login(){
		const loginUser=document.getElementById("user");
		const loginPassword=document.getElementById("password");
		const key=loginUser.value;
		const value=loginPassword.value;
		if(checkIfUserNameCorrect(key)){
			checkIfPasswordCorrect(key,value);
		}
	}

	/*
	localStorage.setItem("p","p");
	//localStorage.removeItem("pppppp");
	//key=localStorage.key(0);
	//myUser=localStorage.getItem("pppp")
	//value=localStorage.value;
	console.log(localStorage);
	//console.log(myUser);
	//console.log(value);
	
</script>
*/
