function insert(a) {
    document.querySelector("#text").value =
      document.querySelector("#text").value + a;
  }
  
  function equal() {
    document.querySelector("h1").innerHTML =
      document.getElementById("text").value;
    var a = document.querySelector("h1").innerHTML;
    var text = document.querySelector("#text").value;
    if (text.endsWith("%")) {
      var digit = text.slice(0, -1);
      var percentage = digit / 100;
      document.querySelector("h1").innerHTML = percentage;
    } else if (a) {
      document.querySelector("h1").innerHTML = eval(a);
    }
  }
  
  function clean() {
    document.querySelector("#text").value = "";
    document.querySelector("h1").innerText = "";
  }
  
  function backet() {
    var text = document.querySelector("#text").value;
    var bt = "(" + text + ")";
    document.querySelector("#text").value = bt;
  }