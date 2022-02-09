$(function () {
    init_selector();
});

/**
 * init("<p>hello</p>")
 *  :创建一个jQuery obj，obj包含p元素
 */
function init_htmlTag() {
    $p = $("<p>hello world</p><p>hello lucia</p>");
    console.log($p.length === 2);
    console.log($p[0].innerText === "hello world");
}

/**
 *  init("<div></div>",propertyObj)
 *      :创建一个jQuery obj，obj包含div元素，propertyObj设置了div元素的属性
 */
function init_htmlTag_propertyObj() {
    let propertyObj = {
        "style": "color:red"
    };
    $div = $("<div></div>", propertyObj);
    console.log($div.attr("style") === "color:red");
    $div.text("hello world").appendTo($("body"));

}

/**
 * init("#p")
 */
function init_id() {

}

/**
 * $(".classA")
 */
function init_class() {
    let $p = $(".pClass");
    console.log($p.text());
}

/**
 * init(selector)
 */
function init_selector() {
    //用逗号分割多个selector
    console.log($("#p1,#p2").length === 2);
}
/**
 * init(selector,context)
 */
function init_selector_context(){
    //在<div id='example'>元素下找p元素
    $p = $('p', '#example');
    console.log($p.length ===3);
}
/**
 *
 */
function functionParam() {

}

/**
 * $([1,2,3])
 */
function arrayParam() {
    $arr = $(["a", "b", "c"]);
    console.log($arr[0] === "a");
    console.log($arr[1] === "b");
    console.log($arr[2] === "c");
}

/**
 * $({name:'lucia'}) :将obj添加到$对象中
 */
function objectParam() {
    $person = $({name: 'lucia'});
    console.log($person[0].name === "lucia");
}


