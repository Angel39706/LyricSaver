//Importing Song Model and  Song View
const songModel = require('../model/songModel');
const songView = require('../view/songView');

//Creates a song based off the Model requirements
class songController {
    static createSong(artist, songName) {
        return new songModel(artist, songName);
    }

    //Displays song details with the song View
    static displaySong(song) {
        songView.renderSong(song);
    }
}

module.exports = songController;