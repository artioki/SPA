const  hashchanged  = async () =>{
  console.log("hashchange:"+window.location.pathname)
  path=window.location.pathname

  url = window.location.origin+'/api'+path
  console.log(url)

  let res = await fetch(url);

  if (res.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    document.getElementById("app").innerHTML = await res.text();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
} 

window.onpopstate= hashchanged;

  let firstload = false;

  if(!firstload){
    console.log(window.location.pathname)
    myFun(window.location.pathname)
  }

function myFun(path){

  history.pushState(null, null, path);
  hashchanged()
}
console.log("end")