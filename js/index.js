//var state = "rs";
//
//if (state === "rs"){
//    document.body.append("Barbaridade Tchê");
//}

var animal = (prompt("Digite aqui"));
animal = animal.toLowerCase();
var b = "This animal in english is";
var animalSelected = b + " ";
var errormessage = "Sorry, i can't find this animal!";

if (animal === "gato") {
  animalSelected += "cat";
} else if (animal === "cachorro") {
  animalSelected += "dog";
} else if (animal === "pássaro") {
  animalSelected += "bird";
} else if (animal === "sapo") {
  animalSelected += "frog";
} else if (animal === "leão") {
  animalSelected += "lion";
} else if (animal === "cavalo") {
  animalSelected += "horse";
} else {
  animalSelected = errormessage;
}
document.body.append (animalSelected);
