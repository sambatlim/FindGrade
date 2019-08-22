function getGrade() {
  var score, result, fromInput;
  //var n = 117061;
    var getyear = document.getElementById("year");
    var n=getyear.options[getyear.selectedIndex].value;
  fromInput = document.getElementById("InputScore").value;
  score = parseFloat(fromInput);
  if (score == "NaN") {
    result = "សូមវាយជាលេខក្នុងប្រអប់";
  } else if (score <= 0 || score > 100) {
    result = "សូមបញ្ចូលលេខអោយបានត្រឹមត្រូវ";
  } else {
    var x = 100 - score;
    var y = x * n;
    var z = y + 100;
    result = Math.floor(z / 100);
  }
  document.getElementById("total").innerHTML=n;
  document.getElementById("showGrade").innerHTML = result;
}
