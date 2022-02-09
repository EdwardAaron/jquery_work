$(function () {
    simple();

    function simple() {
        let $p = $("#example p");
        $p.hide();
        for (let i = 0; i < 10; i++) {
            $p.slideDown(2000);
            $p.slideUp(2000);
        }

        $("input[type=button]").click(function () {
            $("#example p").finish().show();
        });
    }
});