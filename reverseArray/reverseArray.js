inputLenghtofArray = 5;
array = [];
var i = 0;
while (i < inputLenghtofArray){
    array.push(Math.floor(Math.random()*1000));
    i++;
}
console.log(array);

function reverse(array) {

var length =  array.length;
var result = [];

for( var i=0; i <= length - 1; i++) {
    result.push(array.pop());
}
return result;
}

console.log(reverse(array));

