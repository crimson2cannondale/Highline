var eggsAmount;
var eggsMin = 1;
var milkAmount;
var milkMin = 200; //milliliter
var flourAmount;
var flourMin = 100; //grams

document.write("B L I N M A K E R<br>");
window.alert("Hello Boris!");
window.alert("Blinmaker is starting up...");

//eggs
var eggsAmount = window.prompt("how many eggs you have?");
//document.write("you have " + eggsAmount + " eggs<br>");

//milk
var milkAmount = window.prompt("how much milk you have? (ml)");
//document.write("you have " + milkAmount + " ml of milk<br>");

//flour
var flourAmount = window.prompt("how much flour you have? (mg)");
//document.write("you have " + flourAmount + " mg of flour<br>");

//main
if (eggsAmount < eggsMin || milkAmount < milkMin || flourAmount < flourMin) {
  document.write("no blin today<br>");
} else {
  var flourPortions = flourAmount / flourMin;
  var milkPortions = milkAmount / milkMin;
  document.write("you have " + flourPortions + " portions of flour<br>you have " + milkPortions + " portions of milk<br>");
  var smallest;
  if (eggsAmount <= milkPortions && milkPortions <= flourPortions) {
  smallest = eggsAmount;
} else if (milkPortions <= flourPortions && milkPortions <= eggsAmount) {
  smallest = milkPortions;
} else {
  smallest = flourPortions;
}

document.write("you can make " + smallest * 4 + " blins<br>");
document.write("you will need " + smallest * eggsMin + " eggs<br>");
document.write("you will need " + smallest * flourMin + " mg of flour<br>");
document.write("you will need " + smallest * milkMin + " ml of milk<br>");
document.write("Blinmaker shutting down..");
}
