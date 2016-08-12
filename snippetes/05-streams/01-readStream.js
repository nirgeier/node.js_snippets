/**
 * This file contain demo code for streams
 */
var fs = require('fs');

//
// Read the long long using fs - which will read all
// teh file as on chunk
fs.readFile("longTextFile.txt", "UTF-8",
    function(errr, data) {
        // print the file lengt
        console.log(`Content-length: ${data.length}`)

    });

// Read chunks from the file using streams
var stream = fs.createReadStream("longTextFile.txt", "UTF-8");

// Stream is implementing the EventEmitter and has few events
// for the read/write lifecycle

stream.on('error', function(err){
    console.log(err);
    
})


// Local variable to store the total bytes which were read from the file
var total = 0,
counter = 0;

// Print out the length of the chink that was read form file
stream.on('data', function(chunk) {

    ++counter;
    
    // Print the length fhe current chunk of data
    process.stdout.write(`${counter} \t chunk: ${total} \n `);
    total += chunk.length;

});


// Print out when the reading was done
// Again this is the stream event
stream.once("end", function() {
    console.log('\n\n------------------------------------');
    console.log(`Finished reading the file [${total}]`);
    console.log('------------------------------------');

});

// Print the first time we get the data form the file
stream.once("data", function() {
    console.log('--------------------');
    console.log('Started to read file ');
    console.log('--------------------');

});
