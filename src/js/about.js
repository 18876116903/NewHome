require("../style/fontfamily.less");
require("../style/reset.less");
require("../style/header.less");
require("../style/footer.less");
require("../style/about.less");

var bdmap = require("../modules/bdmap");
bdmap();



var aaabbb = document.getElementById("aaabbb");


var t= new Date("2019-03-12 08:30").getTime();

if (Date.now() > t) {
    aaabbb.style.display = "block";
}





