require('readline').createInterface({
    input: process.stdin,
}).on('line', main)

function main(line) {
    console.log(Number(line) + 1);
}