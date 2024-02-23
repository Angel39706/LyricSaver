//Import superagent for http request
const superagent = require('superagent');

class lyricalController {

    //fetches lyrics from api regarding the artist and song name
    static async getLyrics(artist, songName) {
        try {
            //GET Method used to retreive song lyrics
            const res = await superagent.get(`https://api.lyrics.ovh/v1/${artist}/${songName}`);
            //Returns lyrics from the response
            return res.body.lyrics
        } catch(error){
            //Error Thrown if lyrics cannot be found
            throw new Error('Cannot Find Lyrics');
        }
    }
}

module.exports = lyricalController;