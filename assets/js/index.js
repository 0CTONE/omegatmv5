'use strict';

$(document).ready(function () {
    $('#landing-page').click(function () {
        $(this).addClass('slide-out').on('animationend', function () {
            $(this).addClass('hidden');
        });

        $('#main-content').removeClass('hidden');
        const video = document.getElementById('background-video');
        video.muted = false;
        video.play();

        const animations = [
            { selector: '#main-box', animation: 'slide-down' },
            { selector: '#button-1', animation: 'slide-right' },
            { selector: '#button-2', animation: 'slide-left' },
            { selector: '#button-3', animation: 'slide-right' },
            { selector: '#button-5', animation: 'slide-up' },
            { selector: '#footer', animation: 'slide-up' }
        ];

        animations.forEach(({ selector, animation }) => {
            $(selector).addClass(animation);
        });

        new Typed('#typed-text', {
            strings: ['Full-Stack Developer', 'Ex Klar Management', 'Languages I know..', 'C++', 'GO-Lang', 'HTML/CSS', 'Python', 'JavaScript/TypeScript'],
            typeSpeed: 100,
            startDelay: 3,
            backSpeed: 50,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: false,
            smartBackspace: true,
        });

        const tooltips = {};
        $('[data-tooltip]').each(function () {
            let delay = 0;
            let placement = 'bottom';
            if (['mute-button', 'pause-button'].includes(this.id)) {
                placement = 'top';
                delay = 300;
            }
            tooltips[this.id] = tippy(this, {
                content: $(this).data('tooltip'),
                allowHTML: false,
                animateFill: true,
                arrow: true,
                delay: delay,
                followCursor: false,
                hideOnClick: false,
                inlinePositioning: true,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                maxWidth: 'none',
                placement: placement,
                touch: 'hold',
                animation: 'shift-away'
            });
        });

        $('#github-tool, #telegram-tool, #discord-tool').click(function () {
            window.open($(this).data('href'), '_blank');
        });

        const muteButton = $('#mute-button');
        muteButton.click(function () {
            video.muted = !video.muted;
            muteButton.toggleClass('fa-volume-up fa-volume-mute');
            tooltips[this.id].setContent(video.muted ? 'Unmute' : 'Mute');
        });

        const pauseButton = $('#pause-button');
        pauseButton.click(function () {
            video.paused ? video.play() : video.pause();
            pauseButton.toggleClass('fa-play fa-pause');
            tooltips[this.id].setContent(video.paused ? 'Play' : 'Pause');
        });

        let currentIndex = 0;
        const name = document.title;
        setInterval(() => {
            if (currentIndex > name.length) {
                currentIndex = 0;
            }
            const newName = name.substring(0, currentIndex);
            if (document.title !== newName) {
                document.title = newName;
                currentIndex++;
            }
        }, 500);
    });
});