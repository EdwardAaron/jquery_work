window.onload = function () {
    simple();
};
function simple() {
    let $div=$('#example p');
    let elemArr = jQuery.filter(':eq(0)', $div);
    console.log(elemArr[0].innerHTML);
}