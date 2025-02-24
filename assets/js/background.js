document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('background-video');
    console.log('Loading video from URL');

    const videoSources = [
        'https://files.catbox.moe/8an4ao.mp4' 
    ]; // Add semicolon here

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
