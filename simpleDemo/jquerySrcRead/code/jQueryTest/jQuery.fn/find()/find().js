window.onload = function () {
    // find_element();
    find_selector();
};
//参数为 elem 元素
function find_element() {
    $div=$("#example");
    let pLucia = document.getElementsByClassName("lucia");
    let ret = $div.find(pLucia);
    console.log(ret instanceof jQuery);
}
//参数为selector
function find_selector() {
    $div = $("#example");
    let ret = $div.find(":first");
    console.log(ret instanceof jQuery);
    console.log(ret.text()==="hello world");
}