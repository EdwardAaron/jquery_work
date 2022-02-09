document.addEventListener("DOMContentLoaded", function () {
    simple();
});

function simple() {
    $p = $(".helloWorld");
    $p.bind("click", function () {
        console.log(this.innerHTML === "hello world");
    });
}