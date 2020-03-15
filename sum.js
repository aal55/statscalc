class sum {
    static add(a, b) {
        let total = 0;
        if(Array.isArray(a)) {
            a.forEach(function(item) {
                total = sum.add(total, item);
            });
        }
        else {
            total = a + b;
        }
        return total;
    }
}
module.exports = sum;