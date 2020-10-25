$(function () {
    $(document).ready(function () {
        $(document).on("click", function (event) {
            if (!$('.user-info').is(":hidden")) {
                var target = $(event.target)
                const $trigger = $(".avatar");
                if (!$trigger.is(target) && !target.is($('.user-info')) && target.parents('.user-info').length !== 1) {
                    $('.user-info').slideUp("fast");
                }

            }
        });
        $("body").on('click', '.avatar', function () {
            $(".user-info").slideToggle("fast");
        });
    });

    loadUserInfo()
        .then(function (user) {
            displayUserInfo(user)
        })
        .catch(function () {
            alert('Something went wrong')
        })

});

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-aee74b6ac8-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('Error')
            }
        }
    )
}

function displayUserInfo(user) {
    console.log(1)
    $('#name').text(user.firstname + " " + user.lastname);
    $('#epost').text(user.email);
    $('.avatar').attr({"src": user.avatar});
}


