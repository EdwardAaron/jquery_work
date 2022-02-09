window.onload = function () {
    whitespace = "[\\x20\\t\\r\\n\\f]";
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
    // rquickExpr_test();
    // rquickExpr_Sizzle_test();
    // rsingleTag_test();
    // core_rnotwhite_test();
    // core_pnum_test();
    // rrelNum_test();
    // isSimple_test();
    // rtrim_test();
    // rcombinators_test();
    // attributes_test();
    child_test();
};


function child_test() {
    //匹配忽略大小写
    //1 匹配开始，然后是 :
    //2 然后是 only|first|last|nth|nth-last 中的一个
    //3 然后是 -，然后是child|of-type 中的一个
    //4 然后是 (，然后是0或多个空白
    //5 然后是 even|odd中的一个或者是 +或-加上0或多个数字加上n
    //6 5匹配失败没有关系
    //7 然后是0或多个空白
    //8 然后是+或-，没有也可以
    //9 然后是0或多个空白，然后是0或多个数字，然后0或多个空白，最后是)
    //4 到9 匹配失败也没有关系
    let childRegex = new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
        whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
        whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i");
    let arr;
    if (arr = childRegex.exec(":only")) {
        console.log(arr);//null
    }
    if (arr = childRegex.exec(":only-child")) {
        console.log(arr);//only-child、only、child
    }
}
function attributes_test() {
    //1匹配[,然后是0或多个空白，然后是 identifier，然后是0或多个空白，
    //2然后匹配*^$|!~中的0或一个，然后是=,然后是0或多个空白
    //3然后是‘或“，然后0个或多字符(转移的或非转义的)，然后是'或”
    //4或者是 identifier,2,3,4匹配失败也是可以容忍的
    //5然后是 0或多个空白,最后是]

    //$1:属性名
    //$2:操作符例如 =
    //$3:单引号字符串
    //$4:双引号字符串
    //$5:identifier
    let attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
        "*([*^$|!~]?=)" + whitespace +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
        whitespace + "*\\]";
    let regex = new RegExp(attributes);
    let arr;
    if (arr = regex.exec("abc")) {
        console.log(arr);//null
    }
    if (arr = regex.exec("[ab")) {
        console.log(arr);//null
    }
    if (arr = regex.exec("[ab]")) {
        console.log(arr);//[ab]
    }
    if (arr = regex.exec("[ab='cd']")) {
        console.log(arr);//[ab='cd']
    }
}
function identifier_test() {
    //匹配\然后匹配1到6次16进制字符,匹配0或多个空格
    //匹配不成功,则匹配\,一个非空白字符
    //匹配不成功,则匹配一个字符或-
    //匹配不成功,则匹配一个非空白字符
    //以上匹配,匹配多次
    let identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
    let regex = new RegExp(identifier);
    console.log(regex.exec("\\abcefga"));//\abcefga 其中a是量词第二次匹配的结果
    console.log(regex.exec("abc"));
    console.log(regex.exec("*"));//null
}

function rcomma_test() {
    //匹配开始,然后是0或多个空白,然后是逗号,然后是0或多个空白
    let rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
    console.log(rcomma.exec("abc"));//null
    console.log(rcomma.exec(",abc"));//,
    console.log(rcomma.exec(" , abc"));//null
}

function rcombinators_test() {
    //开始,0或多个空白
    //然后是 >,+,~,和whitespace 中的任意一一个,左为arr[1]
    //最后是 0或多个空白
    let rcombinators = new RegExp(
        "^" + whitespace +
        "*([>+~]|" + whitespace + ")"
        + whitespace + "*");
    let arr;
    if(arr=rcombinators.exec(" ")){
        console.log(arr);//空白
    }
    if(arr=rcombinators.exec("+")){
        console.log(arr);//空白
    }
}
function rtrim_test() {
    console.log("rtrim_test...");
    let whitespace = "[\\x20\\t\\r\\n\\f]";//空白字符
    // 1 如果以空白字符开始则匹配成功，arr[1]为undefined
    // 2 匹配一个字符，后面紧着这0或多个转义字符，然后是空白
    let rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
        whitespace + "+$", "g");
    let arr;
    //1
    console.log("1...");
    while ((arr = rtrim.exec(" ab")) !== null) {
        console.log(arr);
    }
    //2
    console.log("2...");
    while ((arr = rtrim.exec("abc ")) !== null) {
        console.log(arr);
    }
    console.log(" abc ".replace(rtrim, "$1")+"d");//abcd
}
function rrelNum_test() {
    let core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/;
    let rrelNum = new RegExp("^([+-])=(" + core_pnum.source + ")", "i");
    console.log(rrelNum.exec("+=112")[0]);
}

function isSimple_test() {
    let isSimple = /^.[^:#\[\.,]*$/;
    console.log(isSimple.exec("abc")[0]);
    console.log(isSimple.exec(".abc")[0]);
    console.log(isSimple.test("ab.c")[0]);
}

/**
 * 匹配数字，包括指数类型
 */
function core_pnum_test() {
    let core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/;
    console.log(core_pnum.exec("10")[0]);
    console.log(core_pnum.exec("10.")[0]);
    console.log(core_pnum.exec("10.123")[0]);
    console.log(core_pnum.exec("10e10")[0]);
}

/**
 * 匹配 <a> 、<a/>、<a></a>
 * 不匹配 <a href='xxx'>
 * 不匹配 <a>xxx</a>
 */
function rsingleTag_test() {
    let rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    console.log("<a> .....")
    let str = "<a>";
    let array;
    if ((array = rsingleTag.exec(str)) !== null) {
        console.log(array);
        console.log(array.length);
    }
    console.log("body  .....")
    str = "body";
    if ((array = rsingleTag.exec(str)) !== null) {
        console.log(array);
        console.log(array.length);
    }
}

/**
 * rquickExpr.exec(" <p>hello world</p>"):
 *  array[1]==="<p>hello world</p>"
 *
 * rquickExpr.exec(" <p>hello world</p>abc"):
 *  array[1]==="<p>hello world</p>"
 *
 * rquickExpr.exec(" <p>hello world</p><p>hello lucia</p>"):
 *  array[1]==="<p>hello world</p><p>hello lucia</p>"
 *
 * rquickExpr.exec("#hello"):
 *  array[2]==="hello"
 *
 *  rquickExpr.exec(" #hello"):
 *  array===null
 */
function rquickExpr_test() {
    let array;
    let rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    array = rquickExpr.exec("#abc");
    console.log(array);
}

/**
 * 匹配非空白字符
 */
function core_rnotwhite_test() {
    let core_rnotwhite = /\S+/g;
    let str = "hello world \n hello lucia";
    let array;
    while ((array = core_rnotwhite.exec(str)) !== null) {
        console.log(`found ${array[0]} at ${array.index}`);
    }
}

/**
 * // 匹配 #xxx xxx .xxx
 */

