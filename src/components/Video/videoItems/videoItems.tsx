import VideoData from "../../../data/videodata";
import VideoPlayer from "../videoPlayer/videoPlayer";
import { WrappContainer, NoneContainer } from "./videoItems.styled";

const extractVideoId = (url: string): string => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1);
    if (parsed.searchParams.has("v")) return parsed.searchParams.get("v")!;
    if (parsed.pathname.includes("/shorts/"))
      return parsed.pathname.split("/shorts/")[1];
    return "";
  } catch {
    return "";
  }
};

const VideoItems = () => {
  return (
    <NoneContainer>
      <WrappContainer>
        {VideoData.map((video) => (
          <li key={video.id}>
            <VideoPlayer videoId={extractVideoId(video.url)} />
          </li>
        ))}
      </WrappContainer>
    </NoneContainer>
  );
};

export default VideoItems;
