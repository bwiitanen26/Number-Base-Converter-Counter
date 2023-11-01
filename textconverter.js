function updateFromText() {

}

function updateFromTextBin() {

}





function toMainPage() {
    window.location.href = "mainpage.html";
}

function clearTextFields() {
    document.getElementById("textField").value = "";
    document.getElementById("binField").value = "";
}

document.getElementById("textField").addEventListener("keyup", updateFromText);
document.getElementById("binField").addEventListener("keyup", updateFromTextBin);
document.getElementById("toMainPageButton").addEventListener("click", toMainPage);
document.getElementById("clearFieldsButton").addEventListener("click", clearTextFields);