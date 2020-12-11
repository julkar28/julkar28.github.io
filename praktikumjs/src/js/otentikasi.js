function chatSend() {
	let text = document.createTextNode(document.getElementsByClassName('ddd')[0].value);
	let para = document.createElement('h4');
	para.className = 'msg2';
	para.appendChild(text);
	let ss = document.createElement('div');
	ss.className = 'chat2';
	ss.appendChild(para);
	document.getElementById('chatlog').appendChild(ss);

	let nama = 'Hai ' + document.getElementsByClassName('ddd')[0].value + ' salam kenal';
	let balas = document.createTextNode(nama);
	let par = document.createElement('h4');
	par.className = 'msg1';
	par.appendChild(balas);
	let ss2 = document.createElement('div');
	ss2.className = 'chat1';
	ss2.appendChild(par);
	document.getElementById('chatlog').appendChild(ss2);
}
function showchat(bul) {
	if (bul) {
		document.getElementsByClassName('btnchat')[0].className = 'hide';
		document.getElementsByClassName('hide1')[0].className = 'chatbox';
	}else {
		document.getElementsByClassName('chatbox')[0].className = 'hide1';
		document.getElementsByClassName('hide')[0].className = 'btnchat';
		
	}
}
const menu = document.querySelector('.toggle input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function() {
	nav.classList.toggle('sld');
})
function formLogin(){
	console.log("username=julkarnain2020,password=javascript");
	let usr = document.getElementById('user').value;
	let pw = document.getElementById('pass').value;
	if(usr == "julkarnain2020" && pw == "javascript"){
		console.log("Login Sukses");
		alert("Login Succesfully");
	}
	else{
		console.log("Login Gagal");
		alert("Incorrect username or password.");
	}
}
