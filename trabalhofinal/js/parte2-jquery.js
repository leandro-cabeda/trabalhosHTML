

$(document).ready(function(){


$( "#servi" ).mouseenter(function() {

  $( "#servi h2" ).animate({ "width": "+=80px" }, "slow" );

});
 
$( "#servi" ).mouseleave(function(){

  $( "#servi h2" ).animate({ "width": "-=80px" }, "slow" );

});


});




