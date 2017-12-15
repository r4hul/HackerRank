function processData(input) {
    //Enter your code here
    var arr = input.split("\n")[1].split(' ').map(Number);

    
    var s = "";
    for (var i = 0; i < 100; i++){
         var count = 0;
      for (var j = 0; j < arr.length; j++){
         if (i === arr[j]) {
             count++;
         };  
       }; 
       if (count > 0) {
       s += Array(count+1).join(i + " ");    
       } else {
           continue;
       };
     };
    console.log(s);
    
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