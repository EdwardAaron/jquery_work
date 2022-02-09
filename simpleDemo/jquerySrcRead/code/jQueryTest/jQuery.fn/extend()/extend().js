//在document加载文档加载完成后，触发事件，当然可以用jQuery 本身的机制来实现

document.addEventListener("DOMContentLoaded", function () {
    // jQueryExtend();
    jQueryObjExtend_NoDeep_OneParam();
});

/**
 * jQuery使用
 */
function jQueryExtend() {

}

/**
 * jQuery对象使用,只有一个参数。
 * $(xx).extend(srcObj)
 *  将属性复制到jQuery对象本身
 */
function jQueryObjExtend_NoDeep_OneParam() {
    $person = $();
    $person.name = "lucia";
    $person.extend(
        {
            name: 'lifu',
            age: 20
        }
    );
    console.log($person.name === 'lifu');//name被覆盖了
    console.log($person.age === 20);
}
