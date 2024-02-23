//Import File sytem for reading and writing async
const fs = require('fs');

class fileController {

    //readFile function intakes song.txt file if not found return error
    static readFile(file) {
        //Promise used to handles aync reading
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf-8', (err, data) => {
                if(err) reject('File Not Found');
                
                //Parses data and returns promise
                const [artist, songName] = data.trim().split('\n');
                resolve([artist.trim(), songName.trim()]);
            });
        });
    }
    
    //will create a songLyric.txt file if it doesnt exist if it does it will update
    static writeFile(file, data) {
        //Promise used for async writing
        return new Promise((resolve, reject) => {
            fs.writeFile(file, data, err => {
                if(err) reject('Could not write file');
                resolve('Successfuly Written');
            });
        });
    }
}

module.exports = fileController;