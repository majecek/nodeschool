var args = process.argv, total = 0;

console.log(process.argv);

args.slice(2).forEach(function (each) {
	total += Number(each)
});
console.log(total);
