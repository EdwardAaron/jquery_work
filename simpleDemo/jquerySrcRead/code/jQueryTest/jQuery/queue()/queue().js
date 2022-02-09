//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {

    // noValidte();
    simpleTest();
});

function simpleTest() {
    /*
    * queue(element,[queueName])
    *   :element 元素节点 ，queueName 队列名 可选项，默认值fx
    * */
    $("#show").click(function () {
        var n = jQuery.queue( $( "div" )[ 0 ], "fx" );
        $( "span" ).text( "Queue length is: " + n.length );
    });
    (function runIt(){
        $( "div" )
            .show( "slow" )
            .animate({
                left: "+=200"
            }, 2000 )
            .slideToggle( 1000 )
            .slideToggle( "fast" )
            .animate({
                left: "-=200"
            }, 1500 )
            .hide( "slow" )
            .show( 1200 )
            .slideUp( "normal", runIt );
    })();
}
/**
 * 无效使用方式
 */
function noValidte() {
    //单元的一个 字符串作为参数没有什么作用
    console.log($.queue("a")instanceof Array);
    console.log($.queue("a").length = 0);

    //单元的元素节点 作为参数没有什么作用
    let elem = document.createElement("p");
    console.log($.queue(elem)instanceof Array);
    console.log($.queue(elem).length = 0);
    //从文档中获取一个元素作为节点  作为参数没有什么作用
    let pElement = document.getElementsByTagName("p")[0];
    console.log($.queue(pElement)instanceof Array);
    console.log($.queue(pElement).length = 0);
}