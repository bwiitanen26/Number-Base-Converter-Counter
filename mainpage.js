function toTextConverter() {
    window.location.href = "textconverter.html"
}

function updateFromDec() {
    //Constraints (only allow digits 0-9)
    const decval = document.getElementById("decField").value;

    



    //Update Binary Field
    document.getElementById("binField").value = document.getElementById("decField").value;


    //Update Octal Field
    document.getElementById("octField").value = document.getElementById("decField").value;


    //Update Hex Field
    document.getElementById("hexField").value = document.getElementById("decField").value;


    //Update ASCII Field
    document.getElementById("asciiField").value = document.getElementById("decField").value;


}

function updateFromBin() {
    //Constraints (only allow digits 0-1)




    //Update Decimal Field
    document.getElementById("decField").value = document.getElementById("binField").value;


    //Update Octal Field
    document.getElementById("octField").value = document.getElementById("binField").value;


    //Update Hex Field
    document.getElementById("hexField").value = document.getElementById("binField").value;


    //Update ASCII Field
    document.getElementById("asciiField").value = document.getElementById("binField").value;


}

function updateFromOct() {
    //Constraints (only allow digits 1-8)



    //Update Decimal Field
    document.getElementById("decField").value = document.getElementById("octField").value;


    //Update Binary Field
    document.getElementById("binField").value = document.getElementById("octField").value;


    //Update Hex Field
    document.getElementById("hexField").value = document.getElementById("octField").value;


    //Update ASCII Field
    document.getElementById("asciiField").value = document.getElementById("octField").value;


}

function updateFromHex() {
    //Constraints (only characters 0-F)




    //Update Decimal Field
    document.getElementById("decField").value = document.getElementById("hexField").value;


    //Update Binary Field
    document.getElementById("binField").value = document.getElementById("hexField").value;


    //Update Octal Field
    document.getElementById("octField").value = document.getElementById("hexField").value;


    //Update ASCII Field
    document.getElementById("asciiField").value = document.getElementById("hexField").value;


}

function updateFromASCII() {
    //Constraints (only allow input to be 1 single legal character in ASCII table)




    //Update Decimal Field
    document.getElementById("decField").value = document.getElementById("asciiField").value;


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