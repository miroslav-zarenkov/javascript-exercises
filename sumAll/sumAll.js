const sumAll = function(x,y) {
    if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number'){
        return 'ERROR';
    }
    if(y < x){
        let a = x;
        x = y;
        y = a;
    }
    let sum = ((y - x + 1) * (x + y)) / 2;
    return sum;
};

module.exports = sumAll;
