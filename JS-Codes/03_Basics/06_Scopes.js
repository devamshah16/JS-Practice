var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);//here ouput will be INNER:10
    
}



console.log(a); //here the output will 300
//console.log(b); here b can't be access outside the scope
console.log(c); //Output:300
