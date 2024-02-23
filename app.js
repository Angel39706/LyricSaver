//File Imports
const songController = require('./controller/songController');
const lyricController = require('./controller/lyricController');
const fileController = require('./controller/fileController');

//invoked async function to fetch and write lyrics
(async () => {
    try {
        console.log('Fetching song lyrics...');

        //Reads from song.txt file with given artist and song name
        const [artist, songName] = await fileController.readFile(`${__dirname}/song.txt`);

        //Creates the song model calling Controller
        const song = songController.createSong(artist, songName);

        //Displays the song details that where passed
        songController.displaySong(song);

        //Fetching lyrics using the lyricController
        const lyrics = await lyricController.getLyrics(artist, songName);

        //Writes file once the lyrics are found and rendered
        await fileController.writeFile(`${__dirname}/songLyric.txt`, lyrics);

        console.log('Finished fetching and writing lyrics');
    } catch(err) {
        console.error('Error:', err.message);
    }
})();
