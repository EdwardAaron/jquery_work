//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    css_gets();
});

/**
 * .css(name) 返回第一个元素的name style值,是一个字符串
 */
function css_get() {
    $p=$("#example p");
    console.log($p.css("fontSize")==="20px");
}

/**
 *  .css(nameArray) 返回第一个元素的nameArray style值,是一个对象
 */
function css_gets() {
    $p=$("#example .helloWorld");
    //返回一个对象
    console.log($p.css(["fontSize","background-color"]).fontSize==="20px");
    console.log($p.css(["fontSize","background-color"])["background-color"]==="rgb(113, 169, 214)");
}
/**
 * .css(name,name) 为所有的elem设置sytle属性
 */
function css_set() {
    $p=$("#example p");
    $p.css("fontSize","30px");
}

function css_change() {
    $p=$("#example p");
    $p.css("fontSize","+=10px");
}