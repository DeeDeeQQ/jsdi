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
var reverseArray = reverse(array);
console.log(reverseArray);

console.log(reverseArray.sort(function (a, b) { return a-b;}));

//не уверен что это новый метод (как по мне работает он так же но другого не нашел

console.log(reverseArray.sort(function (b,a){
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}));