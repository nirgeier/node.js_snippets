/**
 * This code will demo how to read data from file
 */

// Load the fs module
var fs = require('fs');

// Use the fs API to read from file
fs.readFile('data.json', // Name of the file
    {
        // the default is binary reading
        encoding: 'utf-8'
    },

    // callback to get the returned data
    function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });