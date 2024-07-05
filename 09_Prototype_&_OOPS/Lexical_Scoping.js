// Lexical Scoping


function outer(){
    let username = "rajat"
    function inner(){ // here in Lexical Scoping inner() has access of outer() fnc variable or values while other hand outer dont have access of inner() fnc so log has the value of username
         let username = "sri"
        console.log(username); // sri
    }
    inner()
    console.log(username); // rajat
}
outer()


function outer1(){ // all these access and refrences like inner function has a access of outer function this is called lexical scoping in Closures
    // let username = "xyz"
    console.log(username); // username is not defined - coz outer1 parent fnc dont have access of chailds fnc which is inner1 and inner2
    function inner1(){ // here inner1 has the access of outer1 but not access of second child fnc inner2 and same inner2 dont have access of child fnc inner1
        let username = "abc"
        console.log(username); // abc
    }
    function inner2(){ // here inner2 has a access of outer1 but not inner1 so the op is "xyz"
        console.log(username); // xyz
    }
    inner1()
    inner2()
}   
outer1()
