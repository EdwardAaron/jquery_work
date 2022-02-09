//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    remove();
});
function remove() {
    $p1 = $("#example p:eq(0)");
    $p1.remove();
    console.log($("#example p").length===1);
}
