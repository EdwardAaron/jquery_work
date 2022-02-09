//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    /*
     * merge(first,second)
     *   将second中的元素，添加到first中
     *   first和second为数组或类数组
     *   返回值 ：first
     */
    //合并两个数组
    console.log("merge two array");
    let array = $.merge(["hello", "world"], ["hello", "lucia"]);
    console.log(array.length === 4);
    console.log(array);
    //合并两个类数组
    console.log("merge two array like");
    let first = {},second={};
    first[0] = "hello";
    first[1] = "world";
    first.length = 2;
    second[0] = "hello";
    second[1] = "lucia";
    second.length = 2;
    array = $.merge(first, second);
    console.log("array " + array.length);
    console.log("first " + first.length);
    console.log("first " + first[3]);
    console.log("second " + second.length);
});