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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var total=arr[0], min=arr[0], max=arr[0];
    for (i=1; i<arr.length; i++) {
        total = total+arr[i];
        if (min>arr[i]) {
            min=arr[i];
        }
        if (max<arr[i]) {
            max=arr[i];
        }
    }
    console.log(total-max, total-min)

}
