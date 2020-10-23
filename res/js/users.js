$(function () {
    loadUsersInfo()
        .then(function (user) {
            displayUsers(user)
        })
        .catch(function () {
            alert('Error loading user info')
        });
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

function displayUsers(user) {
    $('#name').text(user.firstname + " " + user.lastname);
    $('.avatar').attr({"src": user.avatar});
}