

function simpleArraySum(ar) {
    // Write your code here
    let sum=0;
    for(let i=0 ; i<ar.length ;i++){
    sum += ar[i];
 
}
return sum;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}

