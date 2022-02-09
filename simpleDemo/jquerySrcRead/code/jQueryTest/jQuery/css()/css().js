//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    get_cssProperty();
});

/**
 * 可以获取元素的指定css属性值
 */
function get_cssProperty() {
    let divElem = $("#example").get(0);
    console.log(jQuery.css(divElem, "background-color"));//rgb(128, 128, 128)
    console.log(jQuery.css(divElem, "display")==="block");
}
function set_cssProperty() {

}