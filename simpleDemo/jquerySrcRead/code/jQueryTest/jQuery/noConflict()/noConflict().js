console.log($);
console.log(jQuery);
//将 $ 让出去
jQuery.noConflict();
console.log("after noConflict()");
console.log($);
console.log(jQuery);
//将 jQuery 让出去
let jquery = jQuery.noConflict(true);
console.log("after noConflict(true)");
console.log($);
console.log(jQuery);
console.log(jquery);

