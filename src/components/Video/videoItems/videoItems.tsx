import VideoData from "../../../data/videodata";
import VideoPlayer from "../videoPlayer/videoPlayer";
import {WrappContainer}from './videoItems.styled'

const extractVideoId = (url: string): string => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const VideoItems = () => {
  return (
    <div>
      <WrappContainer>
        {VideoData.map((video) => (
          <li key={video.id}>
            <VideoPlayer videoId={extractVideoId(video.url)} />
          </li>
        ))}
      </WrappContainer>
    </div>
  );
};

export default VideoItems;
