//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {
    /*
    * jQuery.fn.animate(prop, speed, easing, callback)
    *   :由jQuery.fn.extend() 方法扩展而来
    *
    * */
    for(let i in "abc"){
        console.log(i);
    }
});