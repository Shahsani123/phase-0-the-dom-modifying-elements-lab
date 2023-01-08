// Write your code here!
let newHeader;

newHeader = document.createElement('h1');
newHeader.textContent = 'YOUR-NAME is the champion';
newHeader.textContent.replace('YOUR-NAME', 'Shah');
document.body.appendChild(newHeader);
newHeader.setAttribute('id', 'victory');
