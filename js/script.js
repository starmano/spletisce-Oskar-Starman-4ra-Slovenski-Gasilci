function changeContent() {
  var last_div = document.getElementById("last_div");

  var myHtml = document.getElementById("HTML").innerHTML;

  last_div.innerHTML = HTML;
}

function init() {
  setTimeout("changeContent()", 1000);
}

// call changeContent 1 seconds after the page loads
window.onload = /*init*/ a;



