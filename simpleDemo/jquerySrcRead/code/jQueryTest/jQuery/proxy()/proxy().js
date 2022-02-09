document.addEventListener("DOMContentLoaded", function () {
    simple();
});

function simple() {
    let obj = {
        id: 111, hello: function () {
            console.log("this obj id:" + this.id);
        }
    };
    $("#example").on("click", obj.hello);//this obj id:example
    $("#example").on("click", $.proxy(obj.hello,obj));//this obj id:111
}
