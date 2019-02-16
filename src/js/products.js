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
    console.log(qrcode)

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