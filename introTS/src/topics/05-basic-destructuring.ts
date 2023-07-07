interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Inmortals",
  details: {
    author: "Fall Out Boys",
    year: 2010
  }
}

const song = 'Umbrella';

/*
const {
    song: anotherSong,
    songDuration: duration,
    details: { author }
} = audioPlayer;
*/

const {
  song: anotherSong,
  songDuration: duration,
  details: anotherDetails
} = audioPlayer;

const { author } = anotherDetails;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3: ', trunks);

export {};
