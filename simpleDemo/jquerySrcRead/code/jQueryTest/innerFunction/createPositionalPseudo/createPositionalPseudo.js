/**
 * todo
 */
window.onload = function () {
    expando = "sizzle" + 1 * new Date();

};
function createPositionalPseudo(fn) {
    //返回一个新创建的函数
    //该函数被标记过，接收一个参数，调用该函数将创建一个新的函数
    //新的函数被标记过新新的函数的参数为seed，matches
    return markFunction(function (argument) {
        argument = +argument;//argument确保argument是number类型
        return markFunction(function (seed, matches) {
            let j,
                matchIndexes = fn([], seed.length, argument),
                i = matchIndexes.length;
            // Match elements found at the specified indexes
            while (i--) {
                if (seed[(j = matchIndexes[i])]) {
                    seed[j] = !(matches[j] = seed[j]);
                }
            }
        });
    });
}
function markFunction(fn) {
    fn[expando] = true;
    return fn;
}