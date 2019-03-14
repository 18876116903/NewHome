/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../style/fontfamily.less */ "./src/style/fontfamily.less");
__webpack_require__(/*! ../style/reset.less */ "./src/style/reset.less");
__webpack_require__(/*! ../style/header.less */ "./src/style/header.less");
__webpack_require__(/*! ../style/footer.less */ "./src/style/footer.less");
__webpack_require__(/*! ../style/public.less */ "./src/style/public.less");
__webpack_require__(/*! ../style/products.less */ "./src/style/products.less");

var wheel = __webpack_require__(/*! ../modules/wheel2 */ "./src/modules/wheel2.js");
var bdmap = __webpack_require__(/*! ../modules/bdmap */ "./src/modules/bdmap.js");


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


console.log("vvvvvvvvvvvvvvvvvv")
window.onresize = function () {
    console.log("aaaa")
    wheel();
}


wheel();

/***/ }),

/***/ "./src/modules/bdmap.js":
/*!******************************!*\
  !*** ./src/modules/bdmap.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {

    var map = new BMap.Map("bdmap",{enableMapClick:false});
    var point = new BMap.Point(121.441112,31.22588);
	map.centerAndZoom(point, 16);  // 初始化
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    var label = new BMap.Label("嘉春753E栋8楼",{offset:new BMap.Size(20,-10)});
	marker.setLabel(label);

}

/***/ }),

/***/ "./src/modules/wheel2.js":
/*!*******************************!*\
  !*** ./src/modules/wheel2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
var scrollpoint = $(".scrollpoint");




var longHeight = searchresult.height();
var longTranH = longHeight - sih; // 503;
var aniHeight = longHeight + step * 3 + 100 + (clientHeight - sih) / 2 + (fixMinTop * (scale));


function resize() {
    // console.log("clientHeight: " + clientHeight)
    clientWidth = document.body.clientWidth;
    scrollpoint.css({
        transform: "translateX(" + (Math.round((clientWidth - 1000) / 2 - 56)) + "px)"
    })
    // scrollpoint.show();
}



searchani.height(aniHeight)
fixBox.addClass(scaleClass);

// console.log("longHeight: " + longHeight)
// console.log("aniHeight: " + aniHeight)

module.exports = function () {
    searchresult.on("load", function () {
        console.log("llllllllllllllll")
        longHeight = searchresult.height();
        longTranH = longHeight - sih; // 503;
        aniHeight = longHeight + step * 3 + 100 + (clientHeight - sih) / 2 + (fixMinTop * (scale));
        searchani.height(aniHeight)
    })

    resize();
    // console.log("------------------")

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
    scrollpoint.find("li").removeClass("scrollpoint-active");
}


function step2() {
    searchtext.hide().removeClass("searchtextshow");
    searchmain.css({
        opacity: 0
    }, 500)
    searchresult.css({
        opacity: 1
    }, 300)
    scrollpoint.find("li").removeClass("scrollpoint-active");
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
        scrollpoint.find("li").removeClass("scrollpoint-active").eq(0).addClass("scrollpoint-active");
    } else if (top >= 200 && top < 1300) {
        list.css({
            transform: "translateY(" + -txtH * 2 + "px)"
        })
        scrollpoint.find("li").removeClass("scrollpoint-active").eq(1).addClass("scrollpoint-active");
    } else if (top >= 1300 && top < 2000) {
        list.css({
            transform: "translateY(" + -txtH * 3 + "px)"
        })
        scrollpoint.find("li").removeClass("scrollpoint-active").eq(2).addClass("scrollpoint-active");
    } else if (top >= 2000 && top < 2500) {
        list.css({
            transform: "translateY(" + -txtH * 4 + "px)"
        })
        scrollpoint.find("li").removeClass("scrollpoint-active").eq(3).addClass("scrollpoint-active");
    } else {
        scrollpoint.find("li").removeClass("scrollpoint-active");
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

/***/ }),

/***/ "./src/style/fontfamily.less":
/*!***********************************!*\
  !*** ./src/style/fontfamily.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/footer.less":
/*!*******************************!*\
  !*** ./src/style/footer.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/header.less":
/*!*******************************!*\
  !*** ./src/style/header.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/products.less":
/*!*********************************!*\
  !*** ./src/style/products.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/public.less":
/*!*******************************!*\
  !*** ./src/style/public.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/reset.less":
/*!******************************!*\
  !*** ./src/style/reset.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=products.js.map