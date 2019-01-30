require("../style/reset.less");
require("../style/header.less");
require("../style/footer.less");
require("../style/public.less");
require("../style/jobs.less");



$(".project").on("click", ".title", function(){
    $(".proactive").removeClass("proactive");
    $(this).parent().addClass("proactive");
    // $(this).parent().find(".prolist").slideDown();
})

$(".enggroup").on("click", ".gtil", function(){
    $(".endactive").removeClass("endactive");
    $(this).parent().addClass("endactive")
})

