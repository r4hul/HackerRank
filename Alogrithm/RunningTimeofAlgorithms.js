function processData(input) {
    //Enter your code here
    var counter = 0;
    var arr = input.split("\n")[1].split(' ').map(Number);
    for (let i = 1, j = i; i < arr.length; j = ++i) {
        while (arr[j] < arr[j-1] && j) {
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j--] = temp;
            counter++;
        }
    }    console.log(counter);
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
