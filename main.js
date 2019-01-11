function calculator () {
  var fname = prompt("Firstly, what's your name?");
  var num1 = prompt("Give me a number");
  var num2 = prompt("Now give me another number!");
  var numResult = Number(num1) + Number(num2);
  return alert(fname + " the total is " + numResult + "!");
}

calculator();
