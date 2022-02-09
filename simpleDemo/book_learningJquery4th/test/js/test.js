$(function () {
    // console.log($ === jQuery);
    // console.log(typeof ($.each));
    // console.log(typeof $("body"));
    // let $div = $('div');
    // console.log($div.length);
    // let $p1 = $div.find(':nth-child(odd)');
    // console.log($p1.text());

    $('p').on('click.in', function () {
        console.log(this.innerHTML);
    });
    $('p').on('click.out', function () {
        console.log("hello" + this.innerHTML);
    })
});