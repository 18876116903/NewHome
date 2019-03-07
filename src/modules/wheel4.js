var img = $(".scrollongimg .searchresult");
var searchtext = $(".searchtext");
var searchmain = $(".searchmain");
var searchresult = $(".searchresult");
var list = $(".textlist .list")
var scroll = $(".iphonescroll .scroll");



var lastTime = 0;
var mouseTime = 150; // 鼠标事件最小触发时间 200ms
var mouseStep = 50; // 单步移动

var startH = 900; // 开始滚动的头部高度
var clientHeight = document.body.clientHeight; // 页面可使区域高度
var clientWidth = document.body.clientWidth;

var fixBox = $(".scroll");



module.exports = function () {
    // $(window).on("scroll", function (e) {
    //     oniphonesrroll();
    // })
    // oniphonesrroll();
    document.onmousewheel = function (e) {
        var now = Date.now();
        // console.log(now)
        if (now - lastTime > mouseTime) {
            lastTime = now;
            // console.log("111")
            oniphonesrroll();
        } else {
            
        }
        e.preventDefault();
        e.stopPropagation();

        if (1) {
            // console.log(1111)
        }
    }
}




function oniphonesrroll() {
    var top = $(document).scrollTop();
    var ft = fixBox.offset()

    // if (top > startH) {
    // }


    console.log(ft.top - top)

}


function fixed(type) {
    // 初始位置
    if (type == 1) {
        fixBox.removeAttr("style");
    } else if (type == 2) { // fixed
        fixBox.css({
            position: "fixed",
            left: (clientWidth - 1000) / 2 + "px",
            top: "50%",
            marginTop: "-350px"
        })
    } else { // 尾部

    }
}



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

function fix() {
    var wid = $(window).width();
    scroll.css({
        position: "fixed",
        left: (wid - 1000) / 2 + "px",
        top: "50%",
        marginTop: "-350px"
    });
}


function oniphonesrroll2() {
    var top = $(document).scrollTop();
    var imgMaxScroll = img.height() - $(".scrollongimg").height() + headHeight;

    $(".searchani").height(imgMaxScroll + step * 2);

    console.log(top)

    if (top > headHeight && top < imgMaxScroll + step) {
        console.log("111111111")
        fix();
    }

    if (top > headHeight + step && top < headHeight + step * 2) {
        searchtext.show().removeClass("searchtextshow");
        searchmain.show();
        scroll.removeClass("showscroll");
    } else if (top > headHeight + step * 2 && top < headHeight + step * 3) {
        searchtext.show().addClass("searchtextshow");
        searchmain.show();
        scroll.removeClass("showscroll");
    }
    if (top >= headHeight + step && top < imgMaxScroll + step) {
        onscl();
    } else {
        if (top < headHeight + step) {
            ontop();
        }
        if (top > imgMaxScroll + step) {
            onbot();
        }
    }
}





// module.exports = function () {
//     document.onmousewheel = function(e){
//         console.log(e.wheelDelta)
//         e.preventDefault();
//         e.stopPropagation();
//     }
// }