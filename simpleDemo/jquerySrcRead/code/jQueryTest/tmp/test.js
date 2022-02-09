window.onload = function () {
    if ($('#legal-age').prop('checked') === false) {
        console.log('The checkbox is currently unchecked');
    }
};
function simple() {

    function hello(a,_b,c) {
        console.log("hello world");
        if (a) {
            console.log("a...");
            console.log(a);
        }
        if (_b) {
            console.log("_b...");
            console.log(_b);
        }
        if (c) {
            console.log("c...");
            console.log(c);
        }
    }

    hello("a");
    hello("a","b");
    hello("a","b","c");
}