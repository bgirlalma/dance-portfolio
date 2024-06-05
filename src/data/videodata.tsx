import { nanoid } from "nanoid";

interface Video {
    id: string;
    url: string;
}

const VideoData: Video[] = [
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/lD5XfdEW6lE",
  },
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/2OZ1xxi7qLw",
  },
  {
    id: nanoid(),
    url: "https://youtu.be/Lzd_SvMGRJ0",
  },
];

export default VideoData;
