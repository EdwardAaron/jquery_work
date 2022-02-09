//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现
document.addEventListener("DOMContentLoaded", function () {

    simple();
});
/*
     * parseHTML: function (data, context, keepScripts)
     *  data：解析的数据
     *  context：默认为document
     *  keepScripts :是否保留 js
     *  返回：节点 可能为textNode，可能为ElementNode
     */
function simple() {
    let $log = $("#log"),
        str = "hello, <b>my name is</b> jQuery.",
        html = $.parseHTML(str),
        nodeNames = [];
    // Append the parsed HTML
    $log.append(html);
    // Gather the parsed HTML's node names
    $.each(html, function (i, el) {
        nodeNames[i] = "<li>" + el.nodeName + "</li>";
    });
    // Insert the node names
    $log.append("<h3>Node Names:</h3>");
    $("<ol></ol>")
        .append(nodeNames.join(""))
        .appendTo($log);
}

function tmp() {
    //将文本解析为 textNode 数组
    console.log("parse text ...");
    let textNodes = $.parseHTML("hello world");
    console.log(textNodes[0].nodeName);
    console.log(textNodes[0].nodeValue);

    //将tag解析为elementNode
    console.log("parse one tag ...")
    let nodesP = $.parseHTML("<p>hello world</p>");
    console.log(nodesP[0].nodeName);
    console.log(nodesP[0].childNodes[0].nodeValue);
    //可以解析多个tag
    console.log("parse  tags ...")
    nodesP = $.parseHTML("<p>hello world</p><p>hello lucia</p>");
    for (let i = 0; i < nodesP.length; i++) {
        console.log(nodesP[i].nodeName);
        console.log(nodesP[i].childNodes[0].nodeValue);
    }
}