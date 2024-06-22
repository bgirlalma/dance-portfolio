import React, { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface Props {
  videoId: string;
}
const VideoPlayer: React.FC<Props> = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getVideoSizes = () => {
    if (windowWidth >= 1448) {
      return { height: "300", width: "350" };
    } else if (windowWidth >= 1200) {
      return { width: "260", heigth: "200" };
    } else if (windowWidth <= 1200) {
      return { height: "300", width: "400" };
    }
  };
  const opts: YouTubeProps["opts"] = getVideoSizes();

  const onReady: YouTubeProps["onReady"] = (event) => {
    // доступ к экземпляру API YouTube, если это необходимо
    event.target.pauseVideo();
  };
  return (
    <>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </>
  );
};

export default VideoPlayer;
