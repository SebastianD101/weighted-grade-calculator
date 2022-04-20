function add_row() {
    var counter = 2;
    while (document.getElementById("grade_" + counter).style.display === "inline-block") {
        counter++;
    }
    document.getElementById("grade_" + counter).style.display = "inline-block";
    document.getElementById("weight_" + counter).style.display = "inline-block";
}

function subtract_row() {
    var counter = 2;
    while (document.getElementById("grade_" + counter).style.display === "inline-block") {
        counter++;
    }
    
    counter--;
    if (counter !== 1) {
        document.getElementById("grade_" + counter).style.display = "none";
        document.getElementById("weight_" + counter).style.display = "none";
    }
}

function calc() {
    var ovr_grade = 0;
    ovr_grade += document.getElementById("grade_1").value * document.getElementById("weight_1").value * .01;
    ovr_grade += document.getElementById("grade_2").value * document.getElementById("weight_2").value * .01;
    ovr_grade += document.getElementById("grade_3").value * document.getElementById("weight_3").value * .01;
    ovr_grade += document.getElementById("grade_4").value * document.getElementById("weight_4").value * .01;
    ovr_grade += document.getElementById("grade_5").value * document.getElementById("weight_5").value * .01;
    ovr_grade += document.getElementById("grade_6").value * document.getElementById("weight_6").value * .01; 

    document.getElementById("tag").style.display = "block";
    document.getElementById("ovr_grade").innerHTML = ovr_grade;
}