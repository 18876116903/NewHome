require("../style/fontfamily.less");
require("../style/reset.less");
require("../style/header.less");
require("../style/footer.less");
require("../style/index.less");
require("../style/animate.less");


setTimeout(function () {
    ckpagetop();
    // blkani(".blk-frist");
}, 100);





$(window).on("scroll", function (e) {
    // console.log($(document).scrollTop())
    ckpagetop();
})

function ckpagetop() {
    var top = $(document).scrollTop();
    var hei = $(window).height();

    console.log(hei, top)

    var blks = $(".block");

    blks.each(function (index, item) {
        var itop = $(item).offset().top;
        
        if (top + hei > itop + 300) {
            // console.log($(item).offset())
            // $(item).find(".anibegin").addClass("aniend");
            // console.log()
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