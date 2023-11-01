//ASCII Hashmap
asciiCodes = ["NULL", "SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "TAB", "LF", "VT", "FF", "CR", "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "DEL"]

//Function that switches screen to text converter page
function toTextConverter() {
  window.location.href = "textconverter.html"
}
  
function updateFromDec() {
  //Constraint (only allow digits 0-9)
  let decval = document.getElementById("decField").value.replace(/[^0-9]/g, "");
  document.getElementById("decField").value = decval;

  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128))? asciiCodes[Number(document.getElementById("decField").value)] : "";
}

function updateFromBin() {
  //Constraint (only allow digits 0-1)
  let binval = document.getElementById("binField").value.replace(/[^0-1]/g, "");
  document.getElementById("binField").value = binval;

  //Update Decimal Field
  let decval = parseInt(binval,2);
  document.getElementById("decField").value = document.getElementById("binField").value.length > 0 ? decval : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128))? asciiCodes[Number(document.getElementById("decField").value)] : "";
}

function updateFromOct() {
  //Constraint (only allow digits 1-8)
  let octval = document.getElementById("octField").value.replace(/[^0-8]/g, "")
  document.getElementById("octField").value = octval;

  //Update Decimal Field
  let decval = parseInt(octval,8);
  document.getElementById("decField").value = document.getElementById("octField").value.length > 0 ? decval : "";
  
  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128))? asciiCodes[Number(document.getElementById("decField").value)] : "";
}

function updateFromHex() {
  //Constraint (only characters 0-F)
  let hexval = document.getElementById("hexField").value.replace(/[^0-9A-Fa-f]/g, "");
  document.getElementById("hexField").value = hexval;

  //Update Decimal Field
  let decval = parseInt(hexval,16);
  document.getElementById("decField").value = document.getElementById("hexField").value.length > 0 ? decval : "";

  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update ASCII Field
  document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128))? asciiCodes[Number(document.getElementById("decField").value)] : "";
}

function updateFromASCII() {
  let asciival = document.getElementById("asciiField").value;
  document.getElementById("asciiField").value = asciival;

  //Update Decimal Field
  let decval = Number(asciiCodes.indexOf(document.getElementById("asciiField").value))
  let inTable = asciiCodes.indexOf(document.getElementById("asciiField").value) != -1 ? true : false
  document.getElementById("decField").value = ((document.getElementById("asciiField").value.length > 0) && (inTable == true)) ? decval : "";

  //Update Binary Field
  document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(2) : "";

  //Update Octal Field
  document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(8) : "";

  //Update Hex Field
  document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? Number(decval).toString(16) : "";
}

//Copy Decimal Field to clipboard
function copyDec() {
  navigator.clipboard.writeText(document.getElementById("decField").value);
}

//Copy Binary Field to clipboard
function copyBin() {
  navigator.clipboard.writeText(document.getElementById("binField").value);
}

//Copy Octal Field to clipboard
function copyOct() {
  navigator.clipboard.writeText(document.getElementById("octField").value);
}

//Copy Hexadecimal Field to clipboard
function copyHex() {
  navigator.clipboard.writeText(document.getElementById("hexField").value);
}

//Copy ASCII Field to clipboard
function copyASCII() {
  navigator.clipboard.writeText(document.getElementById("asciiField").value);
}

function clearFields() {
  document.getElementById("decField").value = "";
  document.getElementById("binField").value = "";
  document.getElementById("octField").value = "";
  document.getElementById("hexField").value = "";
  document.getElementById("asciiField").value = "";
}

document.getElementById("toTextConButton").addEventListener("click", toTextConverter);
document.getElementById("decField").addEventListener("keyup", updateFromDec);
document.getElementById("binField").addEventListener("keyup", updateFromBin);
document.getElementById("octField").addEventListener("keyup", updateFromOct);
document.getElementById("hexField").addEventListener("keyup", updateFromHex);
document.getElementById("asciiField").addEventListener("keyup", updateFromASCII);
document.getElementById("copyDec").addEventListener("click", copyDec);
document.getElementById("copyBin").addEventListener("click", copyBin);
document.getElementById("copyOct").addEventListener("click", copyOct);
document.getElementById("copyHex").addEventListener("click", copyHex);
document.getElementById("copyASCII").addEventListener("click", copyASCII);
document.getElementById("clearFieldsButton").addEventListener("click", clearFields);