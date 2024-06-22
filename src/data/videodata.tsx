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
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/fpz8ZvRpf90?si=hXCsh_wUqtpqwvtJ",
  },
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/L3idyxEI-b0?si=7_IV2_xiyxanHZpP",
  },
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/RHnQPy7D_eQ?si=iKBAt-HC6rPrwqkt",
  },
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/mn7yuX4rG5o?si=iaOcEU0bPc_tyU2u",
  },
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/YEIBjyDthvk?si=JCh8-plymE2kAz-U",
  },
];

export default VideoData;
