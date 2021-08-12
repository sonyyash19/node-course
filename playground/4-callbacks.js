const add = (a,b, callback) => {
    setTimeout(() => {
        var sum = a + b;
        callback(sum);
    }, 2000);
}

add(1,4, (sum) => {
    console.log(sum);
})