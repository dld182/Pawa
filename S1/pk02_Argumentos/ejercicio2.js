var sum =0;
var num =0;
    for (var i = 2; i < process.argv.length; i++) {
    num = parseInt(process.argv[i])
	sum = sum + num;
}
console.log(sum);