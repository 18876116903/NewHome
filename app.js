const path = require("path");

const static = require('koa-static');
const render = require('koa-art-template');

// const config = require("./config");

const Koa = require('koa')
const app = new Koa()

const router = require("./routes");

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
});


app.use(static(__dirname + '/public', {
    maxage: 24 * 3600 * 1000
}));


app.use(router.routes())

app.listen(process.env.PORT);
console.log(process.env.PORT)


// app.listen(config.get("port"));
// console.log(config.get("port"))

