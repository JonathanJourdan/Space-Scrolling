document.getElementsByClassName("scrolling-wrapper-flex")[0].addEventListener("wheel", fonctionScroll);

var scroll = 0;

var page = document.getElementsByClassName("card");



window.onload = function () {
    for (var i = 0; i < page.length; i++) {

        page[i].setAttribute("id", "slide" + i);
    }
}



var nombrePage = page.length - 1;

var leftNombrePage = nombrePage * 100;

document.getElementById("slide").style.width = leftNombrePage + '%';

document.getElementById("fond2").style.width = leftNombrePage + 100 + '%';

console.log(leftNombrePage);


function fonctionScroll() {

    if (event.deltaY > 0) {
        if (scroll < leftNombrePage) {
            scroll += 100;
            document.getElementById("slide").style.left = '-' + scroll + '%';
            document.getElementById("fond2").style.left = '-' + scroll + '%';
        }

    }

    if (event.deltaY < 0) {

        if (scroll > 0) {

            scroll -= 100;

            document.getElementById("slide").style.left = '-' + scroll + '%';

            document.getElementById("fond2").style.left = '-' + scroll + '%';
        }


    }

    console.log(scroll);

}


document.onkeydown = deplacementTouche;



function deplacementTouche(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        // left arrow

        if (scroll > 0) {

            scroll -= 100;

            console.log(scroll);

            document.getElementById("slide").style.left = '-' + scroll + '%';
            document.getElementById("fond2").style.left = '-' + scroll + '%';
        }

    } else if (e.keyCode == '39') {
        // right arrow

        if (scroll < leftNombrePage) {
            scroll += 100;
            document.getElementById("slide").style.left = '-' + scroll + '%';
            document.getElementById("fond2").style.left = '-' + scroll + '%';
        }
    }

}



addEventListener('mousemove', mousePosition, false);

function mousePosition(p) {
    var positionX = p.pageX;
    var positionY = p.pageY;


    var w = window.innerWidth / 2;
    var h = window.innerHeight / 2;
    console.log(w + "/" + h);

    if (positionX < w) {
        document.getElementById("fond1").style.left = "10px";
    } else {
        document.getElementById("fond1").style.left = "-10px";
    }


    if (positionY < h) {
        document.getElementById("fond1").style.top = "10px";
    } else {
        document.getElementById("fond1").style.top = "-10px";
    }

}





var elementSystèmeSolaire = document.querySelectorAll("#Planetes a");


for (var i = 0; i < elementSystèmeSolaire.length; i++) {
    /*console.log(elementsa[i]);*/
    elementSystèmeSolaire[i].setAttribute("onclick", "linkClick()");
    elementSystèmeSolaire[i].addEventListener("mouseover", affichageSurvolPlanete);
    elementSystèmeSolaire[i].addEventListener("mouseout", playAnim);
}




elementSystèmeSolaire.onclick = linkClick;

function linkClick() {
    var element = this.location;
    
    console.log(element.hash);

    setTimeout(function () {

        var elementhref = element.href;

        var lastChar = elementhref.substr(-2);

        if (lastChar.substr(0, 1) == "#") {
            var lastChar2 = lastChar.substr(-1);
            scroll = lastChar2 * 100;
        } else {
            scroll = lastChar * 100;
        }

        document.getElementById("slide").style.left = -scroll + "%";
        document.getElementById("fond2").style.left = '-' + scroll + '%';

        document.getElementById("titrePlanetes").innerHTML = "Survolez et cliquez sur une planéte";

    }, 1);

}




function affichageSurvolPlanete() {

    var planete = this;
    document.getElementById("titrePlanetes").innerHTML = planete.title;
    
    for(i=0; i < elementSystèmeSolaire.length; i++){
        elementSystèmeSolaire[i].lastChild.style.animationPlayState = "paused";
    }
}



function playAnim() {

    for(i=0; i < elementSystèmeSolaire.length; i++){
        elementSystèmeSolaire[i].lastChild.style.animationPlayState = "running";
    }
}






var elementsa = document.querySelectorAll("section aside a");
console.log(elementsa);

for (var i = 0; i < elementsa.length; i++) {
    /*console.log(elementsa[i]);*/
    elementsa[i].setAttribute("onclick", "linkClick()");
}



elementsa.onclick = linkClick;