const router = require('koa-router')();


router.get('', async (ctx, next) => {
    await ctx.render('layouts/index', {
        title: "虎博科技",
        active: -1
    });
});
router.get('index.html', async (ctx, next) => {
    await ctx.render('layouts/index', {
        title: "虎博科技",
        active: -1
    });
});

router.get("technology", async (ctx, next) => {
    await ctx.render('layouts/technology', {
        title: "虎博科技 - 核心技术",
        active: 0
    });
});
router.get("technology.html", async (ctx, next) => {
    await ctx.render('layouts/technology', {
        title: "虎博科技 - 核心技术",
        active: 0
    });
});


router.get('products', async (ctx, next) => {
    await ctx.render('layouts/products', {
        title: "虎博科技 - 我们的产品",
        active: 1
    });
});
router.get('products.html', async (ctx, next) => {
    await ctx.render('layouts/products', {
        title: "虎博科技 - 我们的产品",
        active: 1
    });
});


router.get('about', async (ctx, next) => {
    await ctx.render('layouts/about', {
        title: "虎博科技 - 关于我们",
        active: 2
    });
});
router.get('about.html', async (ctx, next) => {
    await ctx.render('layouts/about', {
        title: "虎博科技 - 关于我们",
        active: 2
    });
});


router.get('jobs', async (ctx, next) => {
    await ctx.render('layouts/jobs', {
        title: "虎博科技 - 工作机会",
        active: 3
    });
});
router.get('jobs.html', async (ctx, next) => {
    await ctx.render('layouts/jobs', {
        title: "虎博科技 - 工作机会",
        active: 3
    });
});


module.exports = router;