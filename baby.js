//console.log(process.argv)

//console.log(process.argv[2])

//console.log("Length of process argv:" + process.argv.length)

var count = process.argv.length

var sum = 0;

for(i=2;i<count;i++){

	sum += +process.argv[i]

//console.log(process.argv[i])

//console.log("Sum: " +sum)

}

console.log(sum)