//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    filter_selector();
});

/**
 * filter(selector)
 */
function filter_selector() {
    //这里等效于，只不过为了调试，拆开了
    //$("#selector li").filter(":nth-child(2n)").css("background-color", "red");
    let $li = $("#selector li");
    let $filteredLi = $li.filter(":nth-child(2n)");
    $filteredLi.css("background-color", "red");
}

/**
 * filter(fun(index))
 *  :使用fun进行过滤
 *  :index 元素索引
 *  :this 元素
 */
function filter_function() {
    $("li")
        .filter(function (index) {
            return $("strong", this).length === 1;
        })
        .css("background-color", "red");
}