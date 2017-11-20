function processData(input) {
    //Enter your code here
    var new_string = input.replace(/[\n]/g, " ");
    var arr = new_string.split(" ");
    var n = arr[0];
    var k = arr[1];
     arr.splice(0, 2);
    var result;
    for(var i=0;i<k;i++){
      if(arr[i] === n) {
            result = i;
        }   
    }
     console.log(result);
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
