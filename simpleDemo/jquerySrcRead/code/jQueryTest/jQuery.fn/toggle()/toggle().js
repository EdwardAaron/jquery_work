window.onload = function () {
    toggle_fast_slow();
};

/**
 * 没有参数的时候，在隐藏和显示之间切换
 */
function toggle_noParam() {
    $pHello = $("#pHello");
    $pHello.toggle();//#pHello 被隐藏
    $pHello.toggle();//#pHello 被显示
}

/**
 * 只有一个boolean参数，toggle(true) 显示，toggle(false)隐藏
 */
function toggle_booleanParam() {
    $pHello = $("#pHello");
    $pHello.toggle(true);//#pHello 被显示
    $pHello.toggle(false);//#pHello 被隐藏
}

/**
 * toggle('slow') :使用慢速动画
 * toggle('fast') :使用慢速动画
 */
function toggle_fast_slow() {
    $pHello = $("#pHello");
    $pHello.toggle('slow');//#pHello 缓慢地隐藏
    $pHello.toggle('fast');//#pHello 快速的显示
}