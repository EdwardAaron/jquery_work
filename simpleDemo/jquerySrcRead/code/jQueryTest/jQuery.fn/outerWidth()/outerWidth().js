//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    setOuterWidth();
});

/**
 * 返回外宽度
 * outerWidth([includeMargin ])
 *  includeMargin:是否包括外边距
 *  返回元素的宽度，包括 内边距 border [外边距]
 */
function getOuterWidth() {
    let $pHello = $("#pHello");
    $pShow = $("p").last();
    $pShow.text("outerWidth:" + $pHello.outerWidth() +
        " , outerWidth( true ):" + $pHello.outerWidth(true));
}

/**
 * 设置外宽度
 * outerWidth( value [, includeMargin ] )
 *
 */
function setOuterWidth() {
    let modWidth = 60;
    $( "div" ).one( "click", function() {
        $( this ).outerWidth( modWidth ).addClass( "mod" );
        modWidth -= 8;
    });
}