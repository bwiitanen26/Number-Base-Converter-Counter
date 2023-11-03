//ASCII Hashmap
const ascii_codes = ["NULL", "SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "TAB", "LF", "VT", "FF", "CR", "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "DEL"]

/**
 * Retrieves all fields' information from Chrome Local Storage on page load
 */
function getFields() {
    document.getElementById("decField").value = localStorage.getItem("dec_field");
    document.getElementById("binField").value = localStorage.getItem("bin_field");
    document.getElementById("octField").value = localStorage.getItem("oct_field");
    document.getElementById("hexField").value = localStorage.getItem("hex_field");
    document.getElementById("asciiField").value = localStorage.getItem("ascii_field");
}

/**
 * Saves all fields on page to Chrome Local Storage
 * 
 * @param {Number} dec Content in the decimal field
 * @param {Number} bin Content in the binary field
 * @param {Number} oct Content in the octal field
 * @param {Number} hex Content in the hexadecimal field
 * @param {Number} ascii Content in the ASCII field
 */
function saveAllFields(dec, bin, oct, hex, ascii) {
    if (dec <= 0) {
        localStorage.setItem("dec_field", "");
    } else {
        localStorage.setItem("dec_field", dec);
    }
    if (bin <= 0) {
        localStorage.setItem("bin_field", "");
    } else {
        localStorage.setItem("bin_field", bin);
    }
    if (oct <= 0) {
        localStorage.setItem("oct_field", "");
    } else {
        localStorage.setItem("oct_field", oct);
    }
    if (hex <= 0) {
        localStorage.setItem("hex_field", "");
    } else {
        localStorage.setItem("hex_field", hex);
    }
    if ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128)) {
        localStorage.setItem("ascii_field", ascii);
    } else {
        localStorage.setItem("ascii_field", "");
    }
}

/**
 * Clears all field boxes and clears all field box information in Chrome Local Storage
 */
function clearFields() {
    document.getElementById("decField").value = "";
    document.getElementById("binField").value = "";
    document.getElementById("octField").value = "";
    document.getElementById("hexField").value = "";
    document.getElementById("asciiField").value = "";
    localStorage.setItem("dec_field", "");
    localStorage.setItem("bin_field", "");
    localStorage.setItem("oct_field", "");
    localStorage.setItem("hex_field", "");
    localStorage.setItem("ascii_field", "");
}

/**
 * Changes page to text converter page
 */
function toTextConverter() {
    window.location.href = "textconverter.html"
}

/**
 * Converts data and updates all other fields after typing in decimal field
 */
function updateFromDec() {
    //Constraint (only allow digits 0-9)
    let dec_val = document.getElementById("decField").value.replace(/[^0-9]/g, "");
    document.getElementById("decField").value = dec_val;

    //Update Binary Field
    let bin_val = Number(dec_val).toString(2);
    document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? bin_val : "";

    //Update Octal Field
    let oct_val = Number(dec_val).toString(8);
    document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? oct_val : "";

    //Update Hex Field
    let hex_val = Number(dec_val).toString(16);
    document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? hex_val : "";

    //Update ASCII Field
    let ascii_val = ascii_codes[Number(document.getElementById("decField").value)];
    document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128)) ? ascii_val : "";

    saveAllFields(dec_val, bin_val, oct_val, hex_val, ascii_val);
}

/**
 * Converts data and updates all other fields after typing in binary field
 */
function updateFromBin() {
    //Constraint (only allow digits 0-1)
    let bin_val = document.getElementById("binField").value.replace(/[^0-1]/g, "");
    document.getElementById("binField").value = bin_val;

    //Update Decimal Field
    let dec_val = parseInt(bin_val,2);
    document.getElementById("decField").value = document.getElementById("binField").value.length > 0 ? dec_val : "";

    //Update Octal Field
    let oct_val = Number(dec_val).toString(8);
    document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? oct_val : "";

    //Update Hex Field
    let hex_val = Number(dec_val).toString(16);
    document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? hex_val : "";

    //Update ASCII Field
    let ascii_val = ascii_codes[Number(document.getElementById("decField").value)];
    document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128)) ? ascii_val : "";

    saveAllFields(dec_val, bin_val, oct_val, hex_val, ascii_val);
}

/**
 * Converts data and updates all other fields after typing in octal field
 */
function updateFromOct() {
    //Constraint (only allow digits 1-8)
    let oct_val = document.getElementById("octField").value.replace(/[^0-8]/g, "")
    document.getElementById("octField").value = oct_val;

    //Update Decimal Field
    let dec_val = parseInt(oct_val,8);
    document.getElementById("decField").value = document.getElementById("octField").value.length > 0 ? dec_val : "";
    
    //Update Binary Field
    let bin_val = Number(dec_val).toString(2);
    document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? bin_val : "";

    //Update Hex Field
    let hex_val = Number(dec_val).toString(16);
    document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? hex_val : "";

    //Update ASCII Field
    let ascii_val = ascii_codes[Number(document.getElementById("decField").value)];
    document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128)) ? ascii_val : "";

    saveAllFields(dec_val, bin_val, oct_val, hex_val, ascii_val);
}

/**
 * Converts data and updates all other fields after typing in hexadecimal field
 */
function updateFromHex() {
    //Constraint (only characters 0-F)
    let hex_val = document.getElementById("hexField").value.replace(/[^0-9A-Fa-f]/g, "");
    document.getElementById("hexField").value = hex_val;

    //Update Decimal Field
    let dec_val = parseInt(hex_val,16);
    document.getElementById("decField").value = document.getElementById("hexField").value.length > 0 ? dec_val : "";

    //Update Binary Field
    let bin_val = Number(dec_val).toString(2);
    document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? bin_val : "";

    //Update Octal Field
    let oct_val = Number(dec_val).toString(8);
    document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? oct_val : "";

    //Update ASCII Field
    let ascii_val = ascii_codes[Number(document.getElementById("decField").value)];
    document.getElementById("asciiField").value = ((document.getElementById("decField").value.length > 0) && (Number(document.getElementById("decField").value) < 128)) ? ascii_val : "";

    saveAllFields(dec_val, bin_val, oct_val, hex_val, ascii_val);
}

/**
 * Converts data and updates all other fields after typing in ASCII field
 */
function updateFromASCII() {
    let ascii_val = document.getElementById("asciiField").value;
    document.getElementById("asciiField").value = ascii_val;

    //Update Decimal Field
    let dec_val = Number(ascii_codes.indexOf(document.getElementById("asciiField").value))
    let in_table = ascii_codes.indexOf(document.getElementById("asciiField").value) != -1 ? true : false
    document.getElementById("decField").value = ((document.getElementById("asciiField").value.length > 0) && (in_table == true)) ? dec_val : "";

    //Update Binary Field
    let bin_val = Number(dec_val).toString(2);
    document.getElementById("binField").value = document.getElementById("decField").value.length > 0 ? bin_val : "";

    //Update Octal Field
    let oct_val = Number(dec_val).toString(8);
    document.getElementById("octField").value = document.getElementById("decField").value.length > 0 ? oct_val : "";

    //Update Hex Field
    let hex_val = Number(dec_val).toString(16);
    document.getElementById("hexField").value = document.getElementById("decField").value.length > 0 ? hex_val : "";

    saveAllFields(dec_val, bin_val, oct_val, hex_val, ascii_val);
}

/**
 * Copies information in the decimal field to clipboard
 */
function copyDec() {
    navigator.clipboard.writeText(document.getElementById("decField").value);
}

/**
 * Copies information in the binary field to clipboard
 */
function copyBin() {
    navigator.clipboard.writeText(document.getElementById("binField").value);
}

/**
 * Copies information in the octal field to clipboard
 */
function copyOct() {
    navigator.clipboard.writeText(document.getElementById("octField").value);
}

/**
 * Copies information in the hexadecimal field to clipboard
 */
function copyHex() {
    navigator.clipboard.writeText(document.getElementById("hexField").value);
}

/**
 * Copies information in the ASCII field to clipboard
 */
function copyASCII() {
    navigator.clipboard.writeText(document.getElementById("asciiField").value);
}

getFields();

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