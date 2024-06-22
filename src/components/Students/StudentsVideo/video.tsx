import { useOutletContext } from "react-router-dom";
import { VideoStudentsData } from "../../../data/videostudentsdata";
import VideoPlayer from "../../Video/videoPlayer/videoPlayer";
import { Title, Desc, WrappContainer, VideoList } from "./video.styled";
import React from "react";

const extractVideoId = (url: string): string => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

interface Props{
  darkTheme: boolean
}

const VideoStudents: React.FC = () => {
  const { darkTheme } = useOutletContext<Props>();
    return (
        <div>
            <Title darkTheme={darkTheme}> Video students championships, reporting concerts, master classes</Title>
            <Desc darkTheme={darkTheme}>My students participate in many competitions and had the opportunity to take prizes</Desc>
        <WrappContainer>
          {VideoStudentsData.map((video) => (
              <VideoList key={video.id}>
                  <VideoPlayer videoId={extractVideoId(video.url)} />
            </VideoList>
          ))}
        </WrappContainer>
      </div>
    );
}

export default VideoStudents;