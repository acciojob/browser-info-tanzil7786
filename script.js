//your JS code here. If required.

let div=document.createElement('div');
div.id="browser-info";
let para=document.createElement('p');

para.innerText=`You are using ${window.navigator.appName} version ${window.navigator.appVersion}`;

div.append(para);
document.body.append(div);
console.log(para.innerText);