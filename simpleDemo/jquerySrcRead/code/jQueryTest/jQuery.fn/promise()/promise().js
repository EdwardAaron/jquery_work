$(function () {
    $('#square1').animate({left: 500}, 1500);
    $('#square2').animate({left: 500}, 3000);
    $('.square')
        .promise()
        .done(function(value) {//value :jQuery对象
            alert('The animations are completed '+value);
        });
});