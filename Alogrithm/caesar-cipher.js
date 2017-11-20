process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
    var final = s.split("").map(function(letter) {
        if(!letter.match(/[a-z]/i)) return letter
        
        let upperLimit = (letter === letter.toUpperCase()) ? 90 : 122;       
        
        letter = parseInt(letter.charCodeAt(0)) + k%26

        return  (letter > upperLimit) ? String.fromCharCode(letter-26) : String.fromCharCode(letter)
 
     
    }).join("");
    
    console.log(final)
}
