const path = require("path");

const static = require('koa-static');
const render = require('koa-art-template');


const Koa = require('koa')
const app = new Koa()

const router = require("./routes");

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
});


app.use(static(__dirname + '/public'));


app.use(router.routes())

app.listen(5000);
console.log("listen prot: 5000");