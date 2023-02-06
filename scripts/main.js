var num = 2;

Number.prototype.pow = function (x) {
    return Math.pow(this.valueOf(), x);
}

console.log(num.pow(3));


