//Renders the artist and title of song in the terminal
class songView {
    //static method used to render song (listening only)
    static renderSong(song) {
        console.log(`Artist: ${song.artist}, Title: ${song.songName}`);
    }
}

module.exports = songView;