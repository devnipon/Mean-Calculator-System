function calculateMean (y) {
    if (!y.length) return 0;
    const sum = y.reduce((acc, curr) => acc + curr, 0);
    return sum / y.length; 
}

function calculateWeight (x, w) {
    if ( x.length !== w.length || x.length === 0) return 0;
    const weightSum = w.reduce((acc, curr) => acc + curr , 0);
    const valueSum = x.reduce((acc, curr, i) => acc + curr * w[i], 0);
    return valueSum / weightSum
    
}

module.exports = { calculateMean, calculateWeight };
// console.log("value = "+ x + " and " + "weight = "+ w)
// console.log("value Mean = " + calculateMean(x));
// console.log("Weighted Mean = " + (calculateWeight(x, w).toFixed(2)));
