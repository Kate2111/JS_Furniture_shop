window.addEventListener('DOMContentLoaded', function() {
    const videoButton = document.querySelector('.video__button');

    showVideo(videoButton);

    function showVideo(button) {
        button.addEventListener('click', playVideo);
    }

    function playVideo(event) {
        event.preventDefault();

        const videoLink = `<iframe class="video__content" src=${this.dataset.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

        this.insertAdjacentHTML('afterend', videoLink);
        this.removeEventListener('click', playVideo);
    }
})