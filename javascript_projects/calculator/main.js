console.log("Hello Calculator");

var num1 = "",
  n1,
  n2,
  op = "";
var a, dis;
let display = document.getElementById("display");
function submit(id) {

  let key = document.getElementById(id);
  a = key.innerHTML;
  if ((a >= "0" && a <= "9") || a === ".") {
    num1 += a;
    display.innerHTML = num1;
  } else if (a == "+" || a == "-" || a == "x" || a == "/") {
    op = a;
    if (num1.includes(".")) {
      n1 = parseFloat(num1);
      num1 = "";
    } else {
      n1 = parseInt(num1);
      num1 = "";
    }
  } else if (a == "=") {
    if (!num1.includes(".")) {
      n2 = parseInt(num1);
    } else {
      n2 = parseFloat(num1);
    }
    display.innerHTML = calculate(n1, op, n2);
  }
}
function cleared() {
  num1 = "";
  display.innerHTML = "";
}
function calculate(n1, op, n2) {
  if (op == "+") {
    return n1 + n2;
  } else if (op == "-") {
    return n1 - n2;
  } else if (op == "x") {
    return n1 * n2;
  } else {
    if (n2 == 0) {
      return null;
    } else {
      return n1 / n2;
    }
  }
}