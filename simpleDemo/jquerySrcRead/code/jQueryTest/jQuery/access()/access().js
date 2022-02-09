//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    //jQuery的中的每个元素执行回调函数，注意回调函数不能返回false，否则后续元素不会执行回调函数
    $objs = $(".jQuery_each");
    console.log("jQuery.each()有两种用法");
    console.log("第一种 jQuery.each(jqueryObj,callBack)");
    jQuery.each($objs, function (index, element) {
        console.log("this===element " + (this === element));
        console.log("index " + index);
        console.log("element.innerText " + element.innerText);
    });
    console.log("第二种 jQuery.each(jqueryObj,callBack,args)");
    jQuery.each($objs, function () {
        console.log(this);
        console.log(arguments);
    }, ["hello", "lucia"]);
});