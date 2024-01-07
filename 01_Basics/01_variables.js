   const accountId = "12345"
   let accountEmail = "rajat@gmail.com"
   var accountPass = "4545"
   accountCity = "Kanpur"


   //accountId = "89898" (accountId is const so value cant be change)


   accountEmail = "sri@gmail.com"
   accountPass = "1212"
   accountCity = "Delhi"

   let accountState 
//    (accountState value will give undefined value as there no value is assigned)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


//    console.log(accountId);
//    console.log(accountCity);
//    console.log(accountEmail);
//    console.log(accountPass);
   console.table([accountId,accountEmail,accountPass,accountCity,accountState])