document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('background-video');
    console.log('Loading video from URL');

    const videoSources = ['https://files.catbox.moe/8an4ao.mp4']; // Add semicolon here

    // Select a random video (even though there's only one)
    const selectedVideo = videoSources[Math.floor(Math.random() * videoSources.length)];

    // Clear any existing video sources
    videoElement.innerHTML = '';

    // Create a new source element
    const sourceElement = document.createElement('source');
    sourceElement.src = selectedVideo;
    sourceElement.type = 'video/mp4';

    // Append the new source element
    videoElement.appendChild(sourceElement);

    // Reload the video
    videoElement.load();
});
