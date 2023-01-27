function toTextConverter() {
    window.location.href = "textconverter.html"
}

function updateFromDec() {
    document.getElementById("binField").value = document.getElementById("decField").value;



    document.getElementById("octField").value = document.getElementById("decField").value;



    document.getElementById("hexField").value = document.getElementById("decField").value;



    document.getElementById("asciiField").value = document.getElementById("decField").value;





}

function updateFromBin() {
    document.getElementById("binField").value = document.getElementById("decField").value;
}

function updateFromOct() {
    document.getElementById("binField").value = document.getElementById("decField").value;
}

function updateFromHex() {
    document.getElementById("binField").value = document.getElementById("decField").value;
}

function updateFromASCII() {
    document.getElementById("binField").value = document.getElementById("decField").value;
}

document.getElementById("toTextConButton").addEventListener("click", toTextConverter);
document.getElementById("decField").addEventListener("blur", updateFromDec);