var subjectObject = {
    "Front-end": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
    },
    "Back-end": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}

window.onload = function () {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");

    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }

    subjectSel.onchange = function () {
        // Empty chapters and topics dropdown
        chapterSel.length = 1;
        topicSel.length = 1;

        // Display correct values
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }

        topicSel.onchange = function () {
            // Empty chapters dropdown
            chapterSel.length = 1;

            // Display correct values
            for (var z of subjectObject[subjectSel.value][this.value]) {
                chapterSel.options[chapterSel.options.length] = new Option(z, z);
            }
        }
    }
};