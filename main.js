function getParagraph1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_box" + i).value);
    }
    inputs.join(" . ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(" . ");
}

function getParagraph2() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para2_box" + i).value);
    }
    inputs.join(" . ");
    document.getElementById("showParagraph2").innerHTML = inputs.join(" . ");
}