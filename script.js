//your JS code here. If required.
let info=document.getElementById("browser-info");
let browerName=navigator.appName;
let browerVersion = navigator.appVersion;
info.innerText=`you are using ${browerName} version ${browerVersion}`;