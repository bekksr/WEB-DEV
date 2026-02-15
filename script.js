const title = document.querySelector('#title');
const infoText = document.querySelector('.info');
const button = document.querySelector('#btn');

console.log(title);
console.log(infoText);
console.log(button);

title.textContent = 'I CONTROL THE PAGE 😎';
infoText.textContent = 'JavaScript changed this text!';
button.textContent = "Bro you died and etc."
button.addEventListener('click', function() {
    alert("Button clicked");
})

let p = document.createElement('p');
p.textContent = "New paragraph";
document.body.appendChild(p);
