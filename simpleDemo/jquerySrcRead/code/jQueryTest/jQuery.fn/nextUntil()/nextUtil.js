//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    simple();
});
function simple() {
    let term3 = document.getElementById( "term-3" );
    $( "#term-1" )
        .nextUntil( term3, "dd" )
        .css( "color", "green" );
}
