$(function(){
    $('.avatar-container').click(function (){
        $('.user-info').slideToggle("fast");
    });
    $(document).on("click", function(event){
       var $trigger = $('.avatar-container');
       if($trigger !== event.target && !$trigger.has(event.target).length){
           $('.user-info').slideUp("fast");
       }
    });
});