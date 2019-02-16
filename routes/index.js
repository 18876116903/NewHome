const fs = require("fs");
const router = require('koa-router')();

let files = fs.readdirSync(__dirname);
files.forEach(item => {
    if (item != "index.js") {
        var rt = require("./" + item);
        router.use('/', rt.routes(), rt.allowedMethods());
    }
})


module.exports = router;