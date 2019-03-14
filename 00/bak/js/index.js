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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../style/fontfamily.less */ "./src/style/fontfamily.less");
__webpack_require__(/*! ../style/reset.less */ "./src/style/reset.less");
__webpack_require__(/*! ../style/header.less */ "./src/style/header.less");
__webpack_require__(/*! ../style/footer.less */ "./src/style/footer.less");
__webpack_require__(/*! ../style/index.less */ "./src/style/index.less");
__webpack_require__(/*! ../style/animate.less */ "./src/style/animate.less");


var bdmap = __webpack_require__(/*! ../modules/bdmap */ "./src/modules/bdmap.js");
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



var newslist = [{
        "title": "36kr 开发人工智能金融搜索引擎，「虎博科技」获得过亿元 Pre-A 轮融资",
        "content": "",
        "url": "https://36kr.com/p/5136468.html",
        "publishTime": "2018-06-05T08:14:51.906Z",
        "imageUrl": "./img/newsimage@2x.jpg",
        "sort": 1,
    },
    {
        "title": "动点科技 虎博科技：成立不久便获过亿元融资，它要用 AI 打造一个“接地气”的金融搜索引",
        "content": "",
        "url": "https://cn.technode.com/post/2018-06-20/tigerobo/",
        "publishTime": "2018-06-19T08:14:51.906Z",
        "imageUrl": "",
        "sort": 1,
    },
    {
        "title": "速途网：虎博科技创始人陈烨：以金融场景切入，将打造下一代智能简单搜索体验",
        "content": "",
        "url": "http://auto.sootoo.com/content/676174.shtml",
        "publishTime": "2018-06-19T08:14:51.906Z",
        "imageUrl": "",
        "sort": 1,
    }
]



function rendernews(list) {
    var newsitem = $(".newsitem");
    for (var i = 0; i < newsitem.length; i++) {
        var ns = newsitem.eq(i);
        var o = list[i];
        
        ns.find("a").attr("href", o.url);
        ns.find("img").attr("src", o.imageUrl);
        ns.find(".newstitle").text(o.title);
        ns.find(".time").text(formarDate(o.publishTime));
    }
}




function formarDate(d) {
    var ymd = new Date(d);
    var res = ymd.getFullYear() + "年" + (ymd.getMonth() + 1) + "月" + ymd.getDate() + "日";

    return res;
}


// rendernews(newslist);


$.ajax({
    url: "/api/News/GetNewsList",
    methods: "get",
    dataType: "json"
})
.then(res => {
    console.log(res)
    if (res.code == 0) {
        newslist = res.data;
        rendernews(newslist);
    }
})



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

/***/ "./src/style/animate.less":
/*!********************************!*\
  !*** ./src/style/animate.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
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
//# sourceMappingURL=index.js.map