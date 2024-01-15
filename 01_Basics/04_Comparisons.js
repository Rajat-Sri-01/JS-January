// console.log(2 > 2);
// console.log(2 >= 2);
// console.log(2 < 3);
// console.log(2 == 2);
// console.log(2 != 3);

// console.log("2" > 1);
// console.log(2 <= "1");
// console.log("02" > 1);


// console.log(null > 0);
// here null not converted into 0 as here > (Comparison) operator is used
// console.log(null >= 0);
// here null value converted into 0 as here >= operator converted the null to 0 where 0 >= 0 is true
// console.log(null < 0);
// here null not converted into 0 as here > (Comparison) operator is used
// console.log(null == 0);
// here null value remains empty and hence the op will be false as here == operator not changed the value of null to 0

console.log(undefined >= 0); 
console.log(undefined == 0);
console.log(undefined < 0);
// here undefined value remains undefined, it cant be changed as null so op always be false