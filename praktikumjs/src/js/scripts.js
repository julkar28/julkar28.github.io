function kurs() {
	let val = document.getElementById('value').value;
	let kk = document.getElementById('country').value;
	switch (kk) {
		case '9915':
			document.getElementById('flag').src='./src/img/2.png';
			document.getElementById('sym1').innerHTML = 'US$';
			break;
		case '13472':
			document.getElementById('flag').src='./src/img/3.png';
			document.getElementById('sym1').innerHTML = 'S$';
			break;
		case '874':
			document.getElementById('flag').src='./src/img/4.png';
			document.getElementById('sym1').innerHTML = 'RM';
			break;
		case '120':
			document.getElementById('flag').src='./src/img/5.png';
			document.getElementById('sym1').innerHTML = '¥';
			break;
		case '15888':
			document.getElementById('flag').src='./src/img/6.png';
			document.getElementById('sym1').innerHTML = '€';
			break;
		case '3592':
			document.getElementById('flag').src='./src/img/7.png';
			document.getElementById('sym1').innerHTML = '﷼';
			break;
	}
	document.getElementById("range").value=val*kk;

}
function gambar() {
	let cd = document.getElementById('listImg').value;
	document.getElementById('fullImg').src=cd;
	alert('Ini gambar ' + cd.slice(10));
}
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
