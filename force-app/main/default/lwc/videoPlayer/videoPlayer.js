import { LightningElement, api } from 'lwc';

const VIDEO_JS_CDN = 'https://vjs.zencdn.net/8.10.0/video.min.js';
const VIDEO_JS_CSS_CDN = 'https://vjs.zencdn.net/8.10.0/video-js.css';

export default class VideoPlayer extends LightningElement {
    @api videoSrcMp4 = '/mediaresource/box.mp4'; // Set the default MP4 video file to 'box.mp4'
    @api videoSrcWebm = 'MY_VIDEO.webm'; // Replace with the path to your WebM video file
    @api videoPoster = 'MY_VIDEO_POSTER.jpg'; // Replace with the path to your poster image
    @api videoWidth = 640; // Adjust video width as needed
    @api videoHeight = 360; // Adjust video height as needed

    connectedCallback() {
        this.loadScript(VIDEO_JS_CDN)
            .then(() => {
                this.loadCSS(VIDEO_JS_CSS_CDN);
            })
            .catch(error => {
                console.error('Error loading Video.js resources: ', error);
            });
    }

    loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    loadCSS(url) {
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}
