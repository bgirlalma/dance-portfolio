import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";


interface Props {
  videoId: string;
}

const VideoPlayer: React.FC<Props> = ({ videoId }) => {

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900">

      <YouTube
        videoId={videoId}
        opts={opts}
      />
    </div>
  );
};

export default VideoPlayer;
