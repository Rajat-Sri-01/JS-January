const user = { // Object Literals which is simple object
    username : "Rajat",
    loginCount : 6,
    signedIn : true,

    getUserDetails : function (){ // Object function
        console.log("got user details from database");
        console.log(`Username : ${this.username} , loginCount ${this.loginCount}`); // this keyword resembles to Current Context.
        console.log(this); // Output:
// {
//   username: 'Rajat',
//   loginCount: 6,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }

    }
}
console.log(this); // Output :{} empty parentesis coz in Global Context there is no value is in this)
console.log(user.username);
console.log(user.getUserDetails());




// Constructor Function


function User(username, loginCount, isLoggedIn){
    // username = username 
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this // if we dont write retur this still return is returning the this explicitly
}

// const userOne = User("rajat", 10 , true) // here frist time when userone is printing then oop is rajat 10 true but
// const userTwo = User("Srivastava", 20 , false) 
const userOne = new User("rajat", 10 , true) // wth new keywrd new instances created for both the values
const userTwo = new User("Srivastava", 20 , false) // new keyword is used in Contructor Function
console.log(userOne);
console.log(userOne);// when userone is prinitng without prinitng userTwo then output is Srivastava 20 false coz here userTwo value overrides the userOne values so to avoid overrridung we need to give inidividuals insances to userOne and userTwo with (new) keyword 
console.log(userTwo);

// (new) keyword process :
// step 1: first use new create the empty object created which is known as Instances
// step 2: new keyword called constructor function where all the arguments packed inside the function
// step 3: in this keyword whatever the arguments has their values they directly injected into this keyword for further use
// step 4: got the values in the function

console.log(userOne.constructor); // [Function : User]
// Constructor property is refernce of their own function which User()
