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
            alert('Somethings wrong')
        })

    loadPostInfo()

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
    $('#name').text(user.firstname + " " + user.lastname);
    $('#epost').text(user.email);
    $('.avatar').attr({"src": user.avatar});
}

function loadPostInfo() {
    return $.get('https://private-anon-bd07188f71-wad20postit.apiary-mock.com/posts', function (response) {
            for (post of response) {
                let div = $('<div class="post">');
                let postauthor = $('<div class="post-author">');
                let span = $('<span class="post-author-info">');
                let avatar = $('<img>').attr('src', post.author.avatar);
                let name = $('<small>').text(post.author.firstname + " " + post.author.lastname);
                let date = $('<small>').text(post.createTime);
                let postimage = $('<div class="post-image">');
                let video = $('<div class="vid">');
                let title = $('<div class="post-title">');
                let actions = $('<div class="post-actions">');
                let like = $('<button type="button" name="like" class="like-button">').text(post.likes);


                if (post.text != null) {
                    let text = $('<h3>').text(post.text);
                    title.append(text);
                }
                if (post.media != null) {
                    if (post.media.type == "image") {
                        let image = $('<img>').attr('src', post.media.url);
                        postimage.append(image);
                    }
                    if (post.media.type == "video") {
                        let vid = $('<iframe>').attr('src', post.media.url);
                        video.append(vid);
                    }


                }


                div.append(postauthor);
                postauthor.append(span);
                span.append(avatar);
                span.append(name);
                postauthor.append(date);
                div.append(postimage);
                div.append(video);
                div.append(title);
                div.append(actions);
                actions.append(like);

                $('posts').append(div);
            }
        }
    )
}