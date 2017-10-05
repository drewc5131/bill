function load() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}


// When the page is fully loaded, it calls the load() function, which hides the loading icon and shows the rest of the content
document.onreadystatechange = function () {

    if (document.readyState == 'complete') {load();}
}
