const hashchanged = async () => {
  console.log("hashchange:" + window.location.pathname);
  path = window.location.pathname;

  url = window.location.origin + "/api" + path;
  console.log(url);

  let res = await fetch(url);

  if (res.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    document.getElementById("app").innerHTML = await res.text();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
};

function myFun(path) {
  history.pushState(null, null, path);
  hashchanged();
}

console.log("first-start");
window.onpopstate = hashchanged;
myFun(window.location.pathname);
console.log("first-end");
