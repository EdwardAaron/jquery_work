//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    // has_selector();
    has_elements();
});

/**
 * 过滤该jQuery对象，新的jQuery对象中的元素后代满足selector条件
 */
function has_selector() {
    $div = $("div").has("#helloWorld").//jQuery对象中的元素有id为helloWorld的后代
        css("background-color", "red");
    console.log($div.length === 1);
    console.log($div.attr("id") === "example");
}

function has_elements() {
    $div = $("div").has(document.getElementById("helloWorld"));
    console.log($div.length===1);
    console.log($div.attr("id") === "example");
}