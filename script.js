function OpenNav() {
    document.getElementById("PhoneNav").style.width = "100%";
}
function CloseNav() {
    document.getElementById("PhoneNav").style.width = "0";
}

function ShowResults() {
    document.getElementById("Results2021").style.display = "none";
    document.getElementById("Results2020").style.display = "none";
    document.getElementById("Results2019").style.display = "none";

    document.getElementById("ResultsButton2022").style.backgroundColor = "#009900";
}
function ContentChange(year) {
    //Make all buttons darkgreen
    document.getElementById("ResultsButton2022").style.backgroundColor = "#003300";
    document.getElementById("ResultsButton2021").style.backgroundColor = "#003300";
    document.getElementById("ResultsButton2020").style.backgroundColor = "#003300";
    document.getElementById("ResultsButton2019").style.backgroundColor = "#003300";
    //Make pushed button lightgreen
    let buttonId = "ResultsButton" + year   
    document.getElementById(buttonId).style.backgroundColor = "#009900";

    //Hide all content
    document.getElementById("Results2022").style.display = "none";
    document.getElementById("Results2021").style.display = "none";
    document.getElementById("Results2020").style.display = "none";
    document.getElementById("Results2019").style.display = "none";
    //Show content of the pushed button
    let contentId = "Results" + year
    document.getElementById(contentId).style.display = "block";

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
