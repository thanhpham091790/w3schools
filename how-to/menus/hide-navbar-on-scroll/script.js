// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}
