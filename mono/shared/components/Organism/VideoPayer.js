import React, { useEffect, useRef } from 'react';
import 'globals.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const loadHls = async () => {
      const Hls = (await import('hls.js')).default;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    };
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    loadHls();
  }, [src, videoRef]);

  return (
    <>
      <video ref={videoRef} className="w-[500px]">
        Your browser does not support HLS format video.
      </video>
    </>
  );
};

export default VideoPlayer;
