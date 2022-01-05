var divs = [
  "intro",
  "name",
  "role",
  "city",
  "summary",
  "objective",
  "results-1",
];
var visibleId = null;

function display(id) {
  if (visibleId === id) {
    visibleId = id;
  }
  reset();
}

function reset() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.visibility = "visible";
    } else {
      div.style.visibility = "visible";
    }
  }
}

function hide(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  show();
}
function show() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.visibility = "visible";
    } else {
      div.style.visibility = "hidden";
    }
  }
}
