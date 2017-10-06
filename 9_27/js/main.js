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