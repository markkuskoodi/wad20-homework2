$(function () {
    loadUsersInfo()
        .then(function (response) {
            console.log("1")
            for (let user of response) {
                $('users').append(displayUsersInfo(user));
            }
        })
        .catch(function () {
            alert('Error loading user info')
        });

    let clicked = false;

    $(document).on("click", '.follow-button', function () {
        if (clicked) {
            $(this).css('background-color', '#590f6d');
            $(this).css('color', '#ffffff')
            $(this).text("Follow");
            clicked = false
        } else {
            $(this).css('background-color', '#ffffff')
            $(this).css('border', '2px solid purple')
            $(this).css('color', '#590f6d')
            $(this).text("Followed");
            clicked = true
        }
    })
});

function loadUsersInfo() {
    return $.get(
        {
            url: 'https://private-anon-70efa6a1a7-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    )
}

function displayUsersInfo(user) {

    let div = $('<div class="user">');
    let avatar = $('<img alt="Avatar">').attr('src', user.avatar);
    let name = $('<h3 class="name">').text(user.firstname + " " + user.lastname);
    let actions = $('<div class="user-actions">');
    let follow = $('<button type="button" name="follow" class="follow-button">').text("Follow");


    div.append(avatar);
    div.append(name);
    div.append(actions);
    actions.append(follow);

    return div;
}