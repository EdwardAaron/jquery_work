//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
//jQuery.each(["toggle", "show", "hide"], function (i, name){...} 对show 其进行修改
document.addEventListener("DOMContentLoaded", function () {
    show_test();
});

/**
 * show() 显示元素
 */
function show_test() {
    $p = $("#example p");
    $p.show();//显示 所有的p元素
}

/**
 * show(duration)
 *  :显示指定元素
 *  :使用动画
 *  :duration 为数字或字符串，延迟时间,越大动画的开始越晚，播放速度越慢
 */
function show_one_arg() {
    $("button").click(function () {
        $p = $("#pNone");
        // $p.show(1000);
        $p.show("slow");
    });
}