function fibonacci(){
    let n =parseInt(document.getElementById('value').value);

    let p="", a=0, b=1, fib;

    for(i=1; i<=n; i++){
        p += a + ',';
        fib = a + b;
        a = b;
        a = fib;
    }

    document.getElementById('num').innerHTML = p;
}