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
    console.log(scroll.offset())
    scroll.removeAttr("style");
    scroll.css({
        position: "absolute",
        left: "140px",
        bottom: "180px"
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

        var height = 500;

        if (itop <= 0 && itop >= -100) {
            list.css({
                transform: "translateY(" + -height + "px)"
            })
        } else if (itop <= -400 && itop >= -600) {
            list.css({
                transform: "translateY(" + -height * 2 + "px)"
            })
        } else if (itop <= -1300 && itop >= -1700) {
            list.css({
                transform: "translateY(" + -height * 3 + "px)"
            })
        } else if (itop <= -1700 && itop >= -2000) {
            list.css({
                transform: "translateY(" + -height * 4 + "px)"
            })
        }
    }

}




function oniphonesrroll() {
    var top = $(document).scrollTop();
    var imgMaxScroll = img.height() - $(".scrollongimg").height() + headHeight;

    $(".searchani").height(imgMaxScroll + step * 2);

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
    if (top >= headHeight && top < imgMaxScroll + 200) {
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




var mouseTime = 200; // 鼠标事件最小触发时间 200ms
var mouseStep = 100; // 单步移动



module.exports = function () {
    $(window).on("scroll", function (e) {
        oniphonesrroll();
    })
}


// module.exports = function () {

//     document.onmousewheel = function(e){
//         console.log(e.wheelDelta)

//         e.preventDefault();
//         e.stopPropagation();

//     }


// }