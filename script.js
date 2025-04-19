function newVideo(video_thumbnail, duration, channel_logo, video_title, channel_name, views, monts_old) {
    let views_tag = "";
    if (views >= 1000000000) {
        views = views / 1000000000;
        views_tag = "B views"
    } else if (views >= 1000000) {
        views = views / 1000000;
        views_tag = "M views"
    } else if (views >= 1000) {
        views = views / 1000;
        views_tag = "K views"
    }

    let html = `<div class="video-container">
                    <div class="image-sectiion">
                        <img src="${video_thumbnail}" alt="thumbnail" class="thumbnail">
                        <p class="duration">${duration}</p>
                    </div>
                    <div class="info-section">
                        <span class="channel-logo">
                            <img src="${channel_logo}" alt="channel_logo">
                        </span>
                        <span class="channel-info">
                            <div class="heading">
                                <h3 class="video-title">${video_title}</h3>
                            </div>
                            <div class="info">
                                <p class="channel-name">${channel_name}</p>
                                <p class="views-duration">${Math.ceil(views) + views_tag} . ${monts_old} months ago</p>
                            </div>
                        </span>
                        <span class="dotted-icon">
                            <img src="assets/icons/more_menu_icon.png" alt="menu_icon">
                        </span>
                    </div>
                </div>`
    document.querySelector(".contents-area").innerHTML += html;
}

newVideo("assets/pictures/thumbnail.jpg", "07:12", "assets/pictures/Heer_khan.jpg", "Sigma Web Development Course | Tutorial 01", "ChannelName", 27735623, 2)
newVideo("assets/pictures/thumbnail.jpg", "07:12", "assets/pictures/Heer_khan.jpg", "Sigma Web Development Course | Tutorial 01", "ChannelName", 27735623, 2)
newVideo("assets/pictures/thumbnail.jpg", "07:12", "assets/pictures/Heer_khan.jpg", "Sigma Web Development Course | Tutorial 01", "ChannelName", 27735623, 2)
newVideo("assets/pictures/thumbnail.jpg", "07:12", "assets/pictures/Heer_khan.jpg", "Sigma Web Development Course | Tutorial 01", "ChannelName", 27735623, 2)
newVideo("assets/pictures/thumbnail.jpg", "07:12", "assets/pictures/Heer_khan.jpg", "Sigma Web Development Course | Tutorial 01", "ChannelName", 27735623, 2)
newVideo("assets/pictures/thumbnail.jpg", "07:12", "assets/pictures/Heer_khan.jpg", "Sigma Web Development Course | Tutorial 01", "ChannelName", 27735623, 2)