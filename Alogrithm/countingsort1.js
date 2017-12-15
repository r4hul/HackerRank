
function processData(input) {
    //Enter your code here
    var ar = input.split("\n")[1].split(' ').map(Number);
    var count = new Array(101).join('0').split("").map(Number);
    for(var i=0; i<ar.length; i++){
        count[ar[i]]++;
     }
    console.log(count.join(" "));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
