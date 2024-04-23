import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";

function VideoPlayer({ playState, setPlayState }) {
  const player = useRef(null);
  const closeVideo = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? " " : "hide"} `}
      ref={player}
      onClick={closeVideo}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
