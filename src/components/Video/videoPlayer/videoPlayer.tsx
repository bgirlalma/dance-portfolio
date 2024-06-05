import React from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';

interface Props {
    videoId: string;
}
const VideoPlayer: React.FC<Props> = ({ videoId }) => {
      const opts: YouTubeProps['opts'] = {
        height: "300",
        width: "500",
    };
    
     const onReady: YouTubeProps['onReady'] = (event) => {
       // доступ к экземпляру API YouTube, если это необходимо
       event.target.pauseVideo();
     };
    return (
      <>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </>
    );
}

export default VideoPlayer;