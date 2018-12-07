function add (a, b) {
    return a+b;
}

function calculate (a, b) {
    return add(a,b);
}
function main () {
    var result = calculate(10,19);
    console.log("Add with vanila js", result);
}
main();