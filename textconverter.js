//ASCII Hashmap
const ascii_codes = ["NULL", "SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "TAB", "LF", "VT", "FF", "CR", "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "DEL"]

/**
 * Main function that runs on page loadup
 * Calls function to retrieve Chrome Local Storage information and adds event listeners to fields and buttons
 */
function main() {
    // Retrieves saved text and binary information from Chrome Local Storage
    getTCFields();

    //Adds event listeners to text and binary field boxes and runs update functions when boxes are typed in
    document.getElementById("textField").addEventListener("keyup", updateFromText);
    document.getElementById("binTextField").addEventListener("keyup", updateFromBinText);

    //Adds event listeners to buttons and runs functions when buttons are pressed
    document.getElementById("toMainPageButton").addEventListener("click", toMainPage);
    document.getElementById("clearFieldsButton").addEventListener("click", clearTextFields);
}

/**
 * Retrieves saved text and binary information from Chrome Local Storage on page load
 */
function getTCFields() {
    document.getElementById("textField").value = localStorage.getItem("text_field");
    document.getElementById("binTextField").value = localStorage.getItem("bin_text_field");
}

/**
 * Updates the right binary field box with binary converted from text placed in the left text field box
 */
function updateFromText() {
    content = document.getElementById("textField").value;
    let result = "";
    for (let i = 0; i < content.length; i++) {
        ascii_num = ascii_codes.indexOf(content[i]);
        char_binary = String(Number(ascii_num).toString(2));
        while (char_binary.length < 8) {
            char_binary = "0" + char_binary;
        }
        result += char_binary + " ";
    }
    document.getElementById("binTextField").value = content.length > 0 ? result.slice(0,-1) : "";
    localStorage.setItem("text_field", content);
    localStorage.setItem("bin_text_field", result.slice(0,-1))
}

/**
 * Updates the left text field box with text converted from binary placed in the right binary field box
 */
function updateFromBinText() {
    content = document.getElementById("binTextField").value.replace(/[^0-1]/g, "");
    document.getElementById("binTextField").value = content;
    content = content.replace(/\s/g, "");
    result = "";
    for (let i = 0; i < content.length; i+=8) {
        bin_val = content.substring(i,i+8);
        dec_val = parseInt(bin_val,2);
        result += ascii_codes[dec_val];
    }
    document.getElementById("textField").value = content.length > 0 ? result : "";
    localStorage.setItem("bin_text_field", content);
    localStorage.setItem("text_field", result);
}

/**
 * Changes page to main converter page
 */
function toMainPage() {
    window.location.href = "mainpage.html";
}

/**
 * Clears text and binary field boxes and clears text and binary field box information in Chrome Local Storage
 */
function clearTextFields() {
    document.getElementById("textField").value = "";
    document.getElementById("binTextField").value = "";
    localStorage.setItem("text_field", "");
    localStorage.setItem("bin_text_field", "");
}

main();