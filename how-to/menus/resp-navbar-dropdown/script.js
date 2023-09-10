// Toggle between adding and removing the 'responsive' class to topnav when the user clicks on the icon
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}