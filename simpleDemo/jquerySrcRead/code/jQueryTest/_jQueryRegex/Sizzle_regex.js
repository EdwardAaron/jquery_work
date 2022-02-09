/**
 * identifier()
 */
window.onload = function () {
    rcomma_test();
};

/**
 *  (?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^-\x7f])+
 */
function identifier_regex() {
    let whitespace = "[\\x20\\t\\r\\n\\f]";
    //1 匹配 \,然后匹配 至少一次至多6次16进制字符，匹配0或一个空白,
    //2 如果失败则继续：匹配 \,匹配一个非空白，
    //3 如果失败则继续：匹配一个字符或-
    //4 如果失败则继续：匹配一个非空白
    // let identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
    //     "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"; //原型
    let identifier = "(?:(\\\\[\\da-fA-F]{1,6}" + whitespace +
        "?)|(\\\\[^\\r\\n\\f])|([\\w-])|([^\0-\\x7f]))+";//修改原型用于测试
    let regex = new RegExp(identifier);
    //



}

function rtrim_test() {
    let whitespace = "[\\x20\\t\\r\\n\\f]";
    let rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
        whitespace + "+$", "g");
    console.log(rtrim);
    let str = "   hello world   ";
    console.log();
    let arr;
    while ((arr = rtrim.exec(str)) !== null) {
        console.log(arr);
    }
    console.log(str.replace(rtrim, "$1") === "hello world");
}

/**
 * // 匹配 #xxx xxx .xxx
 */
function rquickExpr_test() {
    // 匹配 #xxx xxx .xxx
    let regex = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    let array;
    console.log("match body ...");
    if (array = regex.exec("body")) {
        for (let i = 0; i < array.length; i++) {
            console.log(`array[${i}] ${array[i]}`);
        }
    }
}



function rcombinators_test() {
    let whitespace = "[\\x20\\t\\r\\n\\f]";
    let rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*");
    console.log(rcombinators.exec(""))
}

function matchExpr_child_test() {
    let whitespace = "[\\x20\\t\\r\\n\\f]";//空白字符
    /*
    * /
    *   ^:
    *   (only|first|last|nth|nth-last)
    *   -
    *   (child|of-type)
    *   (?:
    *       \(
    *       [\x20\t\r\n\f]*
    *       (
    *           even|odd|
    *           (
    *               ([+-]|)(\d*)n|
    *            )
    *           [\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|)
    *       )[\x20\t\r\n\f]*
    *        \)|
    *    )
    * /i
    * */
    let matchExpr_CHILD = new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
        whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
        whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i");

}
