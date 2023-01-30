//Function that switches screen to text converter page
function toTextConverter() {
  window.location.href = "textconverter.html"
}
  
function updateFromDec() {
  //Constraint (only allow digits 0-9)
  let decval = document.getElementById("decField").value.replace(/[^0-9]/, "");
  document.getElementById("decField").value = decval;

  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = document.getElementById("decField").value.length > 0 ? String.fromCharCode(Number(document.getElementById("decField").value)) : "";
}

function updateFromBin() {
  //Constraint (only allow digits 0-1)
  let binval = document.getElementById("binField").value.replace(/[^0-1]/, "");
  document.getElementById("binField").value = binval;

  //Update Decimal Field
  let decval = parseInt(binval,2);
  document.getElementById("decField").value = document.getElementById("binField").value.length > 0 ? decval : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = document.getElementById("decField").value.length > 0 ? String.fromCharCode(Number(document.getElementById("decField").value)) : "";
}

function updateFromOct() {
  //Constraint (only allow digits 1-8)
  let octval = document.getElementById("octField").value.replace(/[^0-8]/, "")
  document.getElementById("octField").value = octval;

  //Update Decimal Field
  let decval = parseInt(octval,8);
  document.getElementById("decField").value = document.getElementById("octField").value.length > 0 ? decval : "";
  
  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = document.getElementById("decField").value.length > 0 ? String.fromCharCode(Number(document.getElementById("decField").value)) : "";
}

function updateFromHex() {
  //Constraint (only characters 0-F)
  let hexval = document.getElementById("hexField").value.replace(/[^0-9A-Fa-f]/, "");
  document.getElementById("hexField").value = hexval;

  //Update Decimal Field
  let decval = parseInt(hexval,16);
  document.getElementById("decField").value = document.getElementById("hexField").value.length > 0 ? decval : "";

  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = document.getElementById("decField").value.length > 0 ? String.fromCharCode(Number(document.getElementById("decField").value)) : "";
}

function updateFromASCII() {
  //Constraint (only allow input to be 1 single legal character in ASCII table)
  let asciival = document.getElementById("asciiField").value;
  if (asciival.length > 1) {
    asciival = asciival[0];
  }
  else if (asciival.length == 0) {

  }
  document.getElementById("asciiField").value = asciival;



  //Update Decimal Field
  document.getElementById("decField").value = asciiCodes[document.getElementById("asciiField").value]


  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("asciiField").value;


  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("asciiField").value;


  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("asciiField").value;
}

document.getElementById("toTextConButton").addEventListener("click", toTextConverter);
document.getElementById("decField").addEventListener("keyup", updateFromDec);
document.getElementById("binField").addEventListener("keyup", updateFromBin);
document.getElementById("octField").addEventListener("keyup", updateFromOct);
document.getElementById("hexField").addEventListener("keyup", updateFromHex);
document.getElementById("asciiField").addEventListener("keyup", updateFromASCII);