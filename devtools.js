//set the variables
var viewportX = $(window).width();
var viewportY = $(window).height();
var docY = $(document).height();
 
//create the element
$('body').append('<div id=\"dev-tools\"></div>');
 
//put the variable into the element
$('#dev-tools').css('display', 'block').html('<span class="alt-color">width:</span>' + viewportX + 'px <span class="alt-color">height:</span>' + viewportY + 'px <span class="alt-color">docHeight:</span> ' + docY + 'px');
 
//run again on resize
$(window).resize(function () {
    var viewportX = $(window).width();
    var viewportY = $(window).height();
    var docY = $(document).height();
    $('#dev-tools').css('display', 'block').html('<span class="alt-color">width:</span>' + viewportX + 'px <span class="alt-color">height:</span>' + viewportY + 'px <span class="alt-color">docHeight:</span> ' + docY + 'px');
});

//on mouse hover, switch position (from top to bottom or vice-versa)
$('#dev-tools').hover(function () {
    $(this).toggleClass('switch');
    }, function () {
});