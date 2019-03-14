require("../style/fontfamily.less");
require("../style/reset.less");
require("../style/header.less");
require("../style/footer.less");
require("../style/public.less");
require("../style/jobs.less");

var bdmap = require("../modules/bdmap");
bdmap();


var arttemplate = require("../modules/artTemplate");

var template = require("../template/job.art");


$(".engineering").on("click", ".project .title", function () {
    var pent = $(this).parent();
    if (pent.hasClass("proactive")) {
        pent.removeClass("proactive");
    } else {
        pent.addClass("proactive");
    }
})

$(".engineering").on("click", ".enggroup .gtil", function () {
    var pent = $(this).parent();
    if (pent.hasClass("endactive")) {
        pent.removeClass("endactive");
    } else {
        pent.addClass("endactive");
    }
})


$.get("./accest/json/job.json", function (msg) {
    var html = arttemplate.render(template, msg);
    $(".engineering .blkcent").html(html)
})