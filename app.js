var input = document.querySelector(".inp");
var gram = document.getElementById("gram");
var kg = document.getElementById("kg");
var ounce = document.getElementById("ounce");

// var poundLink = document.getElementById('pound-link');
// var gramsLink = document.getElementById('grams-link');
// var kgLink = document.getElementById('kg-link');
// var ounceLink = document.getElementById('ounce-link');

input.addEventListener("keyup", conversion);

function conversion(e) {
  var value = e.target.value;

  let gramValue = value * 453.592;
  let kgValue = value * 0.453592;
  let ounceValue = value * 16;

  gram.innerText = gramValue;
  kg.innerText = kgValue;
  ounce.innerText = ounceValue;
}
