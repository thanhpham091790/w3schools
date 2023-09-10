var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var classList = this.classList;
        classList.toggle("active");
        var panel = this.nextElementSibling;

        /* Regular accordion (show/hide panel) */
        // if (classList.contains("active")) {
        //     panel.style.display = "block";
        // } else {
        //     panel.style.display = "none";
        // }

        /* Animated accordion (slide down panel) */
        if (classList.contains("active")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }


    });
}