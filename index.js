
$(function(){ 
    var navMain = $(".abcd");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});