import { useEffect, useRef } from "react";
import css from "./HomeVideo.module.css";
import { default as video } from "../../shared/video/video.mp4";
    
const HomeVideo = () => {
    const videoRef = useRef(null);

      useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

    return (
    <div className={css.container}>
      <video
        ref={videoRef}
        className={css.homeVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source type="video/mp4" src={video} />
        </video>
    </div>
    )
};

export default HomeVideo;
