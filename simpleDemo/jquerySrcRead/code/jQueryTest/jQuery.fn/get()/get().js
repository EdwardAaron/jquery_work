//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    /*
     * get(index)
     *  :返回jQuery对象中第 index处的value，index为可选项，可为负值
     */
    let $obj = $(document).pushStack(["hello", "world", "lucia"]);
    console.log($obj.get());//返回一个包含所有value的数组
    console.log(($obj.get(1)) === "world");
    console.log(($obj.get(-1)) === "lucia");//后面第一个
});