// V1: Input field creating console Message, creating DOM p-Eölement
// Using the changed Function
// var input;
//
// function setup() {
//     noCanvas();
//     input = createInput();
//
//     input.changed(newText);
//
// }
//
// function newText(){
//   createP(input.value());
//   //
//   console.log(input.value());
// }

//V2: input Function
// var typing;
//
// function setup() {
//     noCanvas();
//     typing = createInput();
//
//     typing.input(newText);
//
// }
//
// function newText(){
//   createP(typing.value());
//   //
//   console.log(input.value());
// }

//V3

var textfield;
var output;

function setup() {
    noCanvas();
    textfield = createInput("enter your fav");
    textfield.changed(newText);
    textfield.input(newTyping);
    output = select('#output');
}

function newTyping(){
  output.html(textfield.value());
  //

}
function newText(){
  createP(textfield.value());
}
