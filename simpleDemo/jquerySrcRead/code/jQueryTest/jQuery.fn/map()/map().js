/**
 * jQueryExtend()
 */
window.onload = function () {
    simple();
};

function simple() {
    let $arr = $().pushStack(["a", "b", "c"]);
    $map = $arr.map(function (index, elem) {
        //call(thisArg,param...),thisArg如果是原始类型，则会this是thisArg的包装对象
        console.log(this.toString() === elem);
        if (index > 0) {
            return this.toUpperCase();
        }else {
            return this.toString();
        }
    });
    console.log($arr[0] === $map[0]);
    console.log($map[1] === "B");
    console.log($map[2] === "C");
}

