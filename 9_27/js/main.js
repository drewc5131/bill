function load() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}


// When the page is fully loaded, it calls the load() function, which hides the loading icon and shows the rest of the content
document.onreadystatechange = function () {

    if (document.readyState == 'complete') {load();}
}


var isMeme = false;

function togglememe() {
    // toggles comic sans font xddd
    if (!isMeme) {
        var el = document.querySelectorAll('*');
        for (var i = 0; i < el.length; i++) {
            el[i].style.fontFamily = 'Comic Sans MS';
        }
        isMeme = true;
    }
    else {
        var el = document.querySelectorAll('*');
        for (var i = 0; i < el.length; i++) {
            el[i].style.fontFamily = "'Roboto', sans-serif"
        }
        isMeme = false;
    }
}

function toggleLabaire() {
    // Breaks the website
    var el = document.querySelectorAll('*');
    for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'block';
        el[i].style.width = '100%';
        el[i].style.fontFamily = 'Times New Roman';
        el[i].style.color = 'black';
    }
}

function dibenedetto() {
    // makes it short and fat lol
    document.body.style.transform = "scale(1.5, .5)";
}

function donahue() {
    // asks for ur prefered pronoun
    var realgenders = new Array("he", "she", "him", "her");
    var pronoun = window.prompt("What is your prefered pronoun?", "");
    console.log(pronoun);
    if (realgenders.indexOf(pronoun) == -1) {
        document.body.innerHTML = "<h1 style=\"text-align:center\">keep being your self! you are beautiful! dont let the right-wing nazis say your gender isnt real!</h1>"
    }
    if (realgenders.indexOf(pronoun) == 1 || realgenders.indexOf(pronoun) == 3) {
        window.location.href = "https://feministfrequency.com/";
    }
    if (realgenders.indexOf(pronoun) == 0 || realgenders.indexOf(pronoun) == 2) {
        document.body.innerHTML = "<h1 style=\"text-align: center\">get out of here you manspreading woman hating sexist misogonistic pig!</h1>";
    }
}

function jarrett() {
    alert("no i do not want pj back in this class lol");
}

function waire() {
    var el = document.querySelectorAll('td');
    for (var i = 0; i < el.length; i++) {
        el[i].innerHTML = "jackson get out of the classroom";
    }
}

function brewer() {
    window.location.href = "https://en.wikipedia.org/wiki/Bee";
}

function washington() {
    document.body.innerHTML = "<h1 style=\"text-align: center\">lets get going! get to class!</h1>" +
        "<img width=\"100%\" height=\"400px\" src=\"https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg\"/>";
        
}

$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'fade-in-up-sm',
        outClass: 'fade-out-down-sm',
        inDuration: 800,
        outDuration: 500,
        linkElement: 'a:not([target="_blank"]):not([href^="#"])',
        loading: false,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) { window.location.href = url; }
    });
});