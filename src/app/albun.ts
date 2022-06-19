interface Song {
  number: number;
  title: string;
  duration: string;
}

export interface Albun {
  artist: string;
  id: number;
  image: string;
  title: string;
  recordLabel: string;
  songs: Song[];
  released: string;
}
