/**
 * This file will demonstrate the write stream
 **/
var fs = require("fs"),
    readLine = require('readline'),

    // Create the stdin / stdout
    rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    }),

    fileName = "lines.txt";


//
// Ask the user for the next line which will be written to file
//
var writeStream = fs.createWriteStream(fileName, "UTF-8");

// Ask the user for input
rl.question("Type the next line in the file:",
    function(data) {

        // Write the first line
        writeStream.write(data);

        // Prompt for more input and this time append it to the file
        rl.setPrompt("Next line: ");
        rl.prompt();

        // Wait for input line
        rl.on('line', function(nextLine) {

            // Append data to the file
            fs.appendFile(fileName, "\n" + nextLine);

            // Close the stream
            rl.close();

            // Print the content of the file to the console:
            printFile();
        });


    });


/**
 * Print the content of the generated file to the console
 */
function printFile() {

    // Use the fs API to read from file
    fs.readFile(fileName, // Name of the file
        {
            encoding: 'utf-8'
        }, // the default is binary reading

        // callback to get the returned data
        function(err, data) {
            if (err) {
                throw err;
            }
            console.log('\n\n-----------   File Content  ------------');
            console.log(data);
        });
}