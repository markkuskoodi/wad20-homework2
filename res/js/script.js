$(function(){
    $(document).ready(function(){
        $(document).on("click", function(event){
            if(!$('.user-info').is(":hidden")) {
                var target = $(event.target)
                const $trigger = $(".avatar");
                if (!$trigger.is(target) && !target.is($('.user-info')) && target.parents('.user-info').length !== 1) {
                    $('.user-info').slideUp("fast");
                }

            }
        });
        $("body").on('click', '.avatar', function(){
            $(".user-info").slideToggle("fast");
        });
    });
});