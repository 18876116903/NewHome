require("../style/fontfamily.less");
require("../style/reset.less");
require("../style/header.less");
require("../style/footer.less");
require("../style/public.less");
require("../style/products.less");


var bdmap = require("../modules/bdmap");
bdmap();



$(".apps .donwload a").hover(function () {
    var a = $(this);
    var href = a.attr("href");
    var qrcode = a.find(".qrcode");
    if (qrcode.length == 0) {
        qrcode = $('<div class="qrcode"><p>请扫码下载</p><div></div></div>');
        a.append(qrcode);
        new QRCode(qrcode.find("div").get(0), {
            text: href,
            width: 110,
            height: 110,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
    qrcode.show();
    qrcode.animate({
        bottom: "50px",
        opacity: 1,
    }, 200);
}, function () {
    var qrcode = $(this).find(".qrcode");
    qrcode.animate({
        bottom: "0",
        opacity: 0,
    }, 200, function () {
        qrcode.hide();
    });
})


$(".cshq").hover(function () {
    var qrcode = $(this).find(".qrcode");
    qrcode.show();
    qrcode.animate({
        bottom: "50px",
        opacity: 1,
    }, 200);
}, function () {
    var qrcode = $(this).find(".qrcode");
    qrcode.animate({
        bottom: "0",
        opacity: 0,
    }, 200, function () {
        qrcode.hide();
    });
})



// $(document).scrollTop(0);


var img = $(".scrollongimg .searchresult");
var searchtext = $(".searchtext");
var searchmain = $(".searchmain");
var searchresult = $(".searchresult");
var list = $(".textlist .list")
var scroll = $(".iphonescroll .scroll");


var headHeight = 600;
var step = 200;



function ontop() {
    scroll.removeAttr("style");
    img.css({
        transform: "translateY(0px)"
    })
    list.css({
        transform: "translateY(0px)"
    })
    searchtext.removeClass("searchtextshow");
    searchmain.show();
}

function onbot() {
    scroll.removeAttr("style");
    scroll.css({
        position: "absolute",
        left: "140px",
        bottom: "200px"
    });

    img.css({
        transform: "translateY(" + -(img.height() - $(".scrollongimg").height()) + "px)"
    })
}

function onscl() {
    var top = $(document).scrollTop();
    var wid = $(window).width();
    
    
    scroll.css({
        position: "fixed",
        left: (wid - 1000) / 2 + "px",
        top: "50%",
        marginTop: "-350px"
    });

    if (top >= headHeight + step * 2) {
        scroll.addClass("showscroll");
        // searchtext.hide().removeClass("searchtextshow");
        // searchmain.hide();
        var itop = -(top - (headHeight + step * 2 + 100));
        // console.log("itop " + itop)
        itop = itop > 0 ? 0 : itop;

        img.css({
            transform: "translateY(" + itop + "px)"
        })


        if (itop <= 0 && itop >= -100) {
            list.css({
                transform: "translateY(" + -400 + "px)"
            })
        } else if (itop <= -400 && itop >= -600) {
            list.css({
                transform: "translateY(" + -400 * 2 + "px)"
            })
        } else if (itop <= -1300 && itop >= -1700) {
            list.css({
                transform: "translateY(" + -400 * 3 + "px)"
            })
        } else if (itop <= -1700 && itop >= -2000) {
            list.css({
                transform: "translateY(" + -400 * 4 + "px)"
            })
        }
    }

}


$(window).on("scroll", function (e) {
    oniphonesrroll();
})

function oniphonesrroll() {
    var top = $(document).scrollTop();
    var imgMaxScroll = img.height() - $(".scrollongimg").height() + headHeight;

    $(".searchani").height(imgMaxScroll + step);

    console.log(top)

    if (top > headHeight && top < headHeight + step) {
        searchtext.show().removeClass("searchtextshow");
        searchmain.show();
        scroll.removeClass("showscroll");
    } else if (top > headHeight + step && top < headHeight + step * 2) {
        searchtext.show().addClass("searchtextshow");
        searchmain.show();
        scroll.removeClass("showscroll");
    }
    if (top >= headHeight && top < imgMaxScroll) {
        onscl();
    } else {
        if (top < headHeight) {
            ontop();
        }
        if (top > imgMaxScroll) {
            onbot();
        }
    }
}

oniphonesrroll();