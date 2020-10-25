$(function () {
    loadUsersInfo()
        .then(function () {
            loadUsersInfo()
        })
        .catch(function () {
            alert('Error loading user info')
        });

    let clicked = false;
    $(document).on("click", '.follow-button', function(){
        if(!clicked) {
            $(this).css('background-color', '#590f6d');
            clicked = true
        }
        else{
            $(this).css('background-color', '#fffefe')
            // $(this).css('border', ) sama lillaga tuleb border
            clicked = false
        }
    })
});

function loadUsersInfo() {
    return $.get(
        {
            url: 'https://private-anon-70efa6a1a7-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                for (let user of response) {
                    let div = $('<div class="user">');
                    let avatar = $('<img alt="Avatar">').attr('src', user.avatar);
                    let name = $('<small>').text(user.firstname + " " + user.lastname);
                    let actions = $('<div class="user-actions">');
                    let follow = $('<button type="button" name="follow" class="follow-button">').text("Follow");

                    div.append(avatar);
                    div.append(name);
                    div.append(actions);
                    actions.append(follow);

                    $('users').append(div);
                }
            },
            error: function () {
                alert('error')
            }
        }
    )
}