function JahrToBox() {
    //Schieberegler zu Eingabefeld
    document.getElementById("JahrBox").value = document.getElementById("regler").value;

}

function BoxToJahr() {
    //EIngabefeld zu Schieberegler
    document.getElementById("regler").value = document.getElementById("JahrBox").value;
}

function validateInput() {
    var selekt = document.getElementById("JahrBox").value;

    var alarm = document.getElementById("alarm");
    if (!(selekt >= 2004 && selekt <= 2017)) {
        alarm.style.display = "block";
    }
    else {
        alarm.style.display = "none";
    }
}