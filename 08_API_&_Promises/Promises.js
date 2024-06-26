// const promise = new Promise()

const promiseOne = new Promise(function (resolve, reject) { // CREATION OF PROMISE
    setTimeout(function(){
        console.log('Async code is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){ // CONSUME OF PROMISE
    console.log('Promise is consumed');   
})


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async code is complete');
        resolve()
    },1000)
}).then(function(){
    console.log('promise is consumed now');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async code is complete..........');
        resolve({ name: "Rajat", age: "26"})
    }, 1000)
}).then(function(user){
    console.log(user);
    return user.name
}).then(function(name){
    console.log(name);
}).catch(function(error){
    console.log("ERROR:", error);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; // if error is true then promise will reject and catch handles the error 
        // and if error is false then promise is resolved and data of user will get as a output
        if (!error) {
            resolve({name: "Srivastava", age:"30"})
        } else {
            reject('Error: Something went wrong')
        }
    },1000)

}).then(function(user){
    console.log(user);
    return user.age
}).then(function(age){
    console.log(age);
}).catch(function(error){
    console.log(error);
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false; // if error is true then promise will reject and catch handles the error 
        // and if error is false then promise is resolved and data of user will get as a output
        if (!error) {
            resolve({name: "Srivastava", age:"30"})
        } else {
            reject('Error: Something went wrong')
        }
    },1000)

}).then(function(user){
    console.log(user);
    return user.age
}).then(function(age){
    console.log(age);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise is either resolved or rejeceted");
})



const promiseSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; // if error is true then promise will reject and catch handles the error 
        // and if error is false then promise is resolved and data of user will get as a output
        if (!error) {
            resolve({city: "Noida", state:"UP"})
        } else {
            reject('Error: Something went wrong&&&&&&&&&')
        }
    },1000)
})

async function consumePromiseSix(){
    try {
         const response = await promiseSix
         console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseSix()