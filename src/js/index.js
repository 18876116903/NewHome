require("../style/fontfamily.less");
require("../style/reset.less");
require("../style/header.less");
require("../style/footer.less");
require("../style/index.less");
require("../style/animate.less");


var bdmap = require("../modules/bdmap");
bdmap();

setTimeout(function () {
    ckpagetop();
}, 100);

$(window).on("scroll", function (e) {
    ckpagetop();
})

function ckpagetop() {
    var top = $(document).scrollTop();
    var hei = $(window).height();
    var blks = $(".block");
    blks.each(function (index, item) {
        var itop = $(item).offset().top;
        if (top + hei > itop + 300) {
            blkani(item)
        }
    })
}


function blkani(cls, step) {
    step = step || 300;
    var anis = $(cls).find(".anibegin");
    anis.each(function (index, item) {
        setTimeout(function () {
            $(item).addClass("aniend");
        }, step + step * index);
    });
}


$(".mouse img").on("click", function () {
    $("html, body").animate({
        "scrollTop": $(window).height() * 0.9 + "px"
    });
})