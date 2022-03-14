
function myFun(path){
  var xhr = new XMLHttpRequest();
  console.log(`/api${path}`)
  xhr.open('GET', `/api${path}`, false);
  xhr.send();

  if (xhr.status != 200) { 
    console.log( xhr.status + ': ' + xhr.statusText ); 
  } 
  else {
    document.getElementById("app").innerHTML =xhr.responseText;
  }

  history.pushState(null, null, path);
}
console.log("end")