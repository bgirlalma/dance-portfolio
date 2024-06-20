import { nanoid } from "nanoid";

interface Students {
    id: string;
    url: string;
}
export const VideoStudentsData: Students[] = [
  {
    id: nanoid(),
    url: "https://youtube.com/shorts/Em9Y9tzk88I?si=KX38Obq6eqYTmwQc",
  },
  {
    id: nanoid(),
    url: "https://youtu.be/UDJXnoBLwxg?si=GSH0eFKVzHqehgTt",
  },
  {
    id: nanoid(),
    url: "hhttps://youtu.be/kcnVJzy9Vo8?si=PRIm6u_EiIxPT8JT",
  },
  {
    id: nanoid(),
    url: "https://youtu.be/Wv46vKZOZsE?si=QIsWADYocTWKGZzv",
  },
  {
    id: nanoid(),
    url: "https://youtu.be/bg6jzQW50X0?si=DZpnkzFrqGVZ0kDj",
  },
];