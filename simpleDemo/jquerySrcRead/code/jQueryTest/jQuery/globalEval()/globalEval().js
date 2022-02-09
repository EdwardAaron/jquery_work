//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
/**
 * jQueryExtend()
 * nonce_test()
 */
document.addEventListener("DOMContentLoaded", function () {
    // jQueryExtend();
    nonce_test();
});
function simple() {
    let str = "let p = document.createElement('p');" +
        "p.innerText = 'hello world';" +
        "document.body.appendChild(p);";
    let str2 = "let p2 = document.createElement('p');" +
        "p2.innerText = 'hello lucia';" +
        "document.body.appendChild(p2);";
    jQuery.globalEval(str);
    jQuery.globalEval(str2);
    //eval中的变量和执行eval的代码具有相同的作用域
    console.log(p.innerText);//hello world
    console.log(p2.innerText);//hello lucia
}
//todo 还没有测出来
function nonce_test() {
    let str = "let p = document.createElement('p');" +
        "p.innerText = 'hello world';" +
        "document.body.appendChild(p);";
    let str2 = "let p2 = document.createElement('p');" +
        "p2.innerText = 'hello lucia';" +
        "document.body.appendChild(p2);";
    let len = document.getElementsByTagName("script").length;
    jQuery.globalEval(str,{
        nonce: "nonce-2726c7f26c"
    });
    jQuery.globalEval(str2,{
        nonce: "nonce-2726c7f26c"
    });
    console.log(len === document.getElementsByTagName("script").length);

}