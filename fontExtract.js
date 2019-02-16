// 提取汉字, 压缩汉字字体的工具


const fs = require("fs");
const path = require("path");
const Fontmin = require('fontmin');


var txtObj = {};

function gethtml(dirs) {
    var filelist = [];
    for (let i = 0; i < dirs.length; i++) {
        var dir = dirs[i];
        let files = fs.readdirSync(path.join(__dirname, dir));
        for (let ii = 0; ii < files.length; ii++) {
            var filename = files[ii];
            var filepath = path.join(__dirname, dir, filename);
            var stat = fs.statSync(filepath);
            if (stat.isFile()) {
                filelist.push(filename);
                readFileTxt(filepath);
            }
        }
    }
    show();
}



function readFileTxt(filepath) {
    var txt = fs.readFileSync(filepath, "utf-8");

    for (let i = 0; i < txt.length; i++) {
        var ch = txt[i];
        txtObj[ch] = 1;
    }
}


function show() {
    var txt = [];

    for (var k in txtObj) {
        txt.push(k);
    }

    txt = txt.sort(function (a, b) {
        return (a + "").charCodeAt() - (b + "").charCodeAt()
    })

    console.log("查询到得文字：")
    console.log(txt.join(""));
    console.log("文字个数: " + txt.length)

    glyph(txt.join(""))

}



function glyph(txt) {
    console.log("开始打包字体...")
    let fonts = fs.readdirSync(path.join(__dirname, "src/font"));
    for (let ii = 0; ii < fonts.length; ii++) {
        var filename = fonts[ii];
        var filepath = path.join(__dirname, "src/font", filename);
        var stat = fs.statSync(filepath);
        if (stat.isFile() && filename.endsWith(".ttf")) {

            console.log("压缩" + filename + " ...")
            var fontmin = new Fontmin()
                .src("./src/font/" + filename)
                .use(Fontmin.glyph({
                    text: txt,
                    hinting: false
                }))
                .use(Fontmin.ttf2eot()) // eot 转换插件
                .use(Fontmin.ttf2woff()) // woff 转换插件    
                .dest('./public/font') // 输出位置

            fontmin.run(function (err, files) {
                if (err) {
                    throw err;
                }
            })
        }
    }
    console.log("全部完成")




}




gethtml(["views", "views/partials"]);