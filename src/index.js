module.exports = function longestConsecutiveLength(array) {
    // your solution here
    if (array.length==0)
        return 0;
    if (array.length==1)
        return 1;
    array.sort((a, b) => {
        if (a < b)
            return -1;
        if (a >= b)
            return 1;
    });
    var array_numbers=[];
    var l=1; //the length 0f sequence
    for (var i=1; i<array.length; i++) {
        if (array[i]-array[i-1]>1) {
            if (l>1) {
                array_numbers.push(l);
                l=1;
            }
        }
        else if (array[i]-array[i-1]==0) {
            continue;
        }
        else {
            if (i<array.length-1) {
                l+=1;
            }
            else {
                l+=1;
                array_numbers.push(l);
                l=1;
            }
        }
    }
    array_numbers.sort((a, b) => {
        if (a < b)
            return -1;
        if (a >= b)
            return 1;
    });
    if (array_numbers.length==0) {
        return 1;
    }
    return array_numbers[array_numbers.length-1];
}
