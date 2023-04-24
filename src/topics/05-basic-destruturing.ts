interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}


const song= "new song";

const { song:anotherSong, songDuration:duration }= audioPlayer;
const {author:author, year:Year}=audioPlayer.details;

console.log('Song: ', anotherSong);
console.log('Duration: ',duration);
console.log('Author: ',author);
console.log('Year: ',Year);

const [p1,p2,trunks = "Not Found"]: string[]=["Goku","Vegeta"];

console.error("Persona 3: ", trunks|| "No hay Personaje");



export{}