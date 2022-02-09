document.addEventListener("DOMContentLoaded", function () {
    attr_get();
    // attr_set();
});

/**
 * 获取第一个元素的attribute
 */
function attr_get() {
    $p=$("#example p");
    console.log($p.attr("class")==="helloWorld");
}

/**
 * 设置所有元素的attribute
 */
function attr_set() {
    $("#example p").attr("class", "helloLucia");
}