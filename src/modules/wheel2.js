var img = $(".scrollongimg .searchresult");
var searchtext = $(".searchtext");
var searchmain = $(".searchmain");
var searchresult = $(".searchresult");
var list = $(".textlist .list")
var scroll = $(".iphonescroll .scroll");

/**
 * 
 * 80
 * 600
 * 200
 * 
 * 
 * 
 * 
 */



var baseX = 943;

var txtH = 500;
var stepN = 0;
var fixH = 700; // 固定区高度
var startH = 900; // 开始滚动的头部高度
var step = 250;
var clientHeight = document.body.clientHeight; // 页面可使区域高度
var clientWidth = document.body.clientWidth;
var sih = $(".scrollongimg").height()



var scaleClass = 1;
var scale = 1;
if (clientHeight >= 700 && clientHeight < 800) {
    scaleClass = "scale08";
    scale = 0.8;
}
if (clientHeight >= 500 && clientHeight < 700) {
    scaleClass = "scale07";
    scale = 0.7;
}

// console.log(clientHeight, scaleClass)

var fixMinTop = (clientHeight - fixH) / 2;

var searchtext = $(".searchtext");
var searchmain = $(".searchmain");
var searchresult = $(".searchresult");
var fixBox = $(".scroll");
var searchani = $(".searchani");

var longHeight = searchresult.height();
var longTranH = longHeight - sih; // 503;

// console.log("------------------------------")
// console.log(longHeight, fixMinTop)

var aniHeight = longHeight + step * 3 + 100 + (clientHeight - sih) / 2 + (fixMinTop * (scale));
console.log(aniHeight)


searchani.height(aniHeight)
fixBox.addClass(scaleClass);

// console.log("longHeight: " + longHeight)
// console.log("aniHeight: " + aniHeight)

module.exports = function () {
    $(window).on("scroll", function (e) {
        oniphonesrroll();
    })
    oniphonesrroll();
}


oniphonesrroll();


function oniphonesrroll() {


    clientWidth = document.body.clientWidth;
    // console.log("clientWidth:" + clientWidth)
    
    
    var top = $(document).scrollTop();
    var ft = fixBox.offset()
    scrollFixed(top);

    // console.log(top)

    if (top <= baseX + step * 1) {
        // console.log("000000000000000")
        searchtext.removeClass("searchtextshow");
        searchresult.css({
            transform: "translateY(0px)"
        })
    } else if (top > baseX + step * 1 && top <= baseX + step * 2) {
        // 第一段 显示搜索文字，显示主界面，隐藏长图
        // console.log("111111111111")
        step1();
    } else if (top >= baseX + step * 2 && top <= baseX + step * 3) {
        // 第二段 过度界面
        step2();
    } else if (top >= baseX + step * 3 && top < aniHeight && (top - (baseX + step * 3)) < longTranH) {
        // 开始滚动
        // console.log("33333333333", top)
        step3(top - (baseX + step * 3));
    } else if ((top - (baseX + step * 0)) >= longTranH) {
        // console.log("444444444444")
        step4(top);

    }
}


function scrollFixed(top) {
    var fo = fixBox.offset()
    var t = fo.top - top;

    if (top < 800) {
        fixed(1)
    }

    // console.log(top, fixMinTop, baseX)
    if (top + fixMinTop >= baseX) {
        fixed(2)
    }

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



function step1() {
    searchtext.show();
    searchtext.addClass("searchtextshow");
    searchmain.css({
        opacity: 1
    }, 500)
    searchresult.css({
        opacity: 0
    }, 300)
}


function step2() {
    searchtext.hide().removeClass("searchtextshow");
    searchmain.css({
        opacity: 0
    }, 500)
    searchresult.css({
        opacity: 1
    }, 300)
}

function step3(top) {
    step2();
    searchresult.css({
        transform: "translateY(" + -top + "px)"
    })

    if (top >= 0 && top < 200) {
        list.css({
            transform: "translateY(" + -txtH + "px)"
        })
    } else if (top >= 200 && top < 1300) {
        list.css({
            transform: "translateY(" + -txtH * 2 + "px)"
        })
    } else if (top >= 1300 && top < 2000) {
        list.css({
            transform: "translateY(" + -txtH * 3 + "px)"
        })
    } else if (top >= 2000 && top < 2500) {
        list.css({
            transform: "translateY(" + -txtH * 4 + "px)"
        })
    }

}


var tempy = 0;

function step4(top) {
    var tt = (top + fixMinTop) - baseX;
    if (!tempy) {
        tempy = tt;
    } else {
        tt = tempy;
    }
    step2();
    console.log("tt:" + tt)
    fixBox.removeAttr("style");
    searchresult.css({
        transform: "translateY(" + -longTranH + "px)"
    })
    fixBox.css({
        position: "absolute",
        left: "140px",
        "top": tt + "px",
        // bottom: fixMinTop + "px"
    });



}




// module.exports = function () {
//     document.onmousewheel = function(e){
//         console.log(e.wheelDelta)
//         e.preventDefault();
//         e.stopPropagation();
//     }
// }