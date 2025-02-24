document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('background-video');
    console.log('Loading random vid')

    const videoSources = [
        'assets/video/background.mp4' 
    ];

    const randomIndex = Math.floor(Math.random() * videoSources.length);
    const selectedVideo = videoSources[randomIndex];

    while (videoElement.firstChild) {
        videoElement.removeChild(videoElement.firstChild);
    }

    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', selectedVideo);
    sourceElement.setAttribute('type', 'video/mp4');

    videoElement.appendChild(sourceElement);
    videoElement.load();
});
