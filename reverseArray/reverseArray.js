var array = [1, 2, 3, 4, 5, 6, 7];
var length =  array.length;
var result = [];
for( var i=0; i <= length - 1; i++) {
    result.push(array.pop());
    console.log(i);
}
console.log(result);

