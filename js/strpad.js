function str_pad(num, digits) {
    var a = num.toString();
    while (a.length < digits) {
        a = "0" + a;
    }
    return a;
}
var i = 0;
function fibonacci(n) {
    if (n < 0) {
        return;
    }
    i++;
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
}
