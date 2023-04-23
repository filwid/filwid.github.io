function OpenNav() {
    document.getElementById("PhoneNav").style.width = "100%";
}
function CloseNav() {
    document.getElementById("PhoneNav").style.width = "0";
}

function ShowResults(){
    document.getElementById("ResultsButton2022").style.borderBottom = "2px solid black";
    document.getElementById("ResultsButton2021").style.borderBottom = "0px solid black";
    document.getElementById("ResultsButton2020").style.borderBottom = "0px solid black";
    document.getElementById("ResultsButton2019").style.borderBottom = "0px solid black";


    console.log("Show results")

    //S�tt alla utom Results2022 till display none

    document.getElementById("Results2021").style.display = "none";
    document.getElementById("Results2020").style.display = "none";
    document.getElementById("Results2019").style.display = "none";

}

function ChangeContent(year) {

    //Rensa formateringen p� alla knappar och alla resutls content
    document.getElementById("ResultsButton2022").style.borderBottom = "0px solid black";
    document.getElementById("ResultsButton2021").style.borderBottom = "0px solid black";
    document.getElementById("ResultsButton2020").style.borderBottom = "0px solid black";
    document.getElementById("ResultsButton2019").style.borderBottom = "0px solid black";

    //Ta fram Id p� den knappen som ska vara understruken

    let idOfChosenButton = "ResultsButton" + year;

    //Ta fram Id p� den resultscontent som ska visas

    let idOfChosenContent = "Results" + year;

    //S�tt en border p� den vlda knappen
    document.getElementById(idOfChosenButton).style.borderBottom = "2px solid black";

    //Ta s�tt dissplay none p� alla divar

    document.getElementById("Results2022").style.display = "none";
    document.getElementById("Results2021").style.display = "none";
    document.getElementById("Results2020").style.display = "none";
    document.getElementById("Results2019").style.display = "none";

    //S�tt display grid p� den som ska visas
    document.getElementById(idOfChosenContent).style.display = "grid";
    
}

function StatSlider() {
    document.getElementById("Inner1").style.width = "62%";
    document.getElementById("Inner2").style.width = "69%";

}
function ToggleContent(clubname) {
    
    let idOfContent = clubname + "Content";
    let idOfMenuIcon = clubname + "MenuIcon";

    let x = document.getElementById(idOfContent);
    let y = document.getElementById(idOfMenuIcon);


    if (x.clientHeight == "0") {
        x.style.height = "200px";
        y.src = "img/WITBCrossIcon.png"
    }
    else {
        x.style.height = "0";
        y.src = "img/WITBMenuIcon.png"
    }

}
