import Video from "../components/Video/video";
import styled from "styled-components";

const VideoContainer = styled.div`
position: sticky;
  padding: 0 20px 40px;
  display: flex;
  justify-content: center;
`;

const VideoPage = () => {
  return (
    <VideoContainer>
      <Video />
    </VideoContainer>
  );
};

export default VideoPage;
