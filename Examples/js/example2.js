function myBols(msgText){    
let html = document.querySelector('html');

let panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

let msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

let closeBtn = document.createElement('button');
closeBtn.textContent = 'w';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);

  }

// msg.textContent= 'My bols is cold, men'
// msg.textContent= msgText
}
let btn = document.querySelector("button");
btn.onclick = myBols;



