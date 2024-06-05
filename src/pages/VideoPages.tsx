import Video from "../components/Video/video";
import styled from "styled-components";

const VideoContainer = styled.div`
  padding: 0 20px 40px;
`;

const VideoPage = () => {
  return (
    <VideoContainer>
      <Video />
    </VideoContainer>
  );
};

export default VideoPage;
