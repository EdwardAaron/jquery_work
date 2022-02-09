//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    /*
    * contains(first,second)
    *  :jQuery.contains = Sizzle.contains
    * :second 元素是否为 first 元素的后代元素
    * :返回值 true 是 ，false 否
    */
    let diveElem = $('div').get(0);
    let pElem = $('span p').get(0);
    let contain = jQuery.contains(diveElem, pElem);
    console.log(`is div contain p ${contain}`);
});