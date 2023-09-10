function myFunction() {
    var ele;
    ele = document.getElementById("myNavbar");
    if (ele.classList.contains("responsive")) {
        ele.classList.remove("responsive");
    } else {
        ele.classList.add("responsive");
    }
}