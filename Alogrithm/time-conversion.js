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

function timeConversion(s) {
   var timeParts = s.split(':');
var hour = Number(timeParts[0]);
var min = timeParts[1];
var sec = timeParts[2].substr(0,2);
var amPm = timeParts[2].substr(2);

if(amPm == 'AM'){
    if(hour == 12) hour = 0;
} else {
    if(hour != 12) hour += 12;
}

if(hour < 10){
    hour = '0' + hour;
}

return hour + ':' + min + ':' + sec;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
