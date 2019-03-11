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

