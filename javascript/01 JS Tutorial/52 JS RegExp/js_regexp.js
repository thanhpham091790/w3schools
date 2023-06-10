
/* Using a regular expression to change data format */
{
    const re = /(\w+)\s(\w+)/;
    const str = "Thanh Pham";
    const newStr = str.replace(re, "$2, $1");
    console.log(newStr);
}
/* Using regular expression to split lines with different line endings/ends of line/line breaks */
{
    const text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
    const lines = text.split(/\r\n|\r|\n/);
    console.log(lines);
}
/* Using regular expression on multiple lines */
{
    const s = "Please yes\namke my day";
    const sub1 = s.match(/yes.*day/);
    console.log(sub1);
    // Returns null


    const sub2 = s.match(/yes[^]*day/);
    console.log(sub2);
}

/* Using a regular expression with the sticky flag */
const str = "#foo#";
const regex = /foo/y;
regex.lastIndex = 1;
console.log(regex.test(str)); // true

regex.lastIndex = 5;
console.log(regex.test(str)); // false (lastIndex is taken into account with sticky flag)

regex.lastIndex; // 0 (reset after match failure)

/* The difference between the sticky flag and the global flag */
{
    const re = /\d/y;
    let r;
    while ((r = re.exec("123 456"))) {
        console.log(r, "AND re.lastIndex", re.lastIndex);
    }
}

/* Extracting subdomain name from URL */
{
    const url = "https://www.thanhhpham.com";
    console.log(/^https?:\/\/(.+?)\./.exec(url)[1]);
}

/* Building a regular expression from dynamic inputs */
{
    const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
    const order = "Let me get some bacon and eggs, please";

    console.log(order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g")));
}

