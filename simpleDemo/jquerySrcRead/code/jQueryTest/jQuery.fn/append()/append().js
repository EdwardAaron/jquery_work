document.addEventListener("DOMContentLoaded", function () {
    append_htmlString();
});

/**
 * .append(htmlString)
 *  :参数为一个html标记字符串
 *  :将htmlString转化为节点，然后作为$()中每个元素的最后一个子节点
 */
function append_htmlString() {
    $divs = $("#example div");
    $divs.append("<p>new data inserted by js.</p>")
}

