document.addEventListener("DOMContentLoaded", function () {
    text_set();
});

/**
 * .text():返回集合总所有元素节点的文本内容的组合
 */
function text_get() {
    $p = $("#example p");
    console.log($p.text());
}

/**
 * .text(str):设置集合中所有的元素的内容为str，不会解析str中的tag标签
 */
function text_set() {
    $div = $(".empty");
    $div.text("<p>hello world</p>");
}