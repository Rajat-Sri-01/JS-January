// for loop *******************

// for (let i = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`First Loop value is ${i}`);
    for (let J = 0; J <= 10; J++) {
        // console.log(`First Loop value is ${i} and second loop value is ${J}`);
        
    }
}

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log("5 Executed");
//     }
//     console.log(i);
// }

// ********** Break ******************
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log("5 Executed");
        break
    }
    // console.log(i);
}

// *********** Continue ******************
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log("5 Executed");
        continue
    }
    // console.log(i);
}


// let myArray = [44,55,66]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i]
//     // console.log(element);;
    
// }

let myArray = [44,55,66]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    console.log(element);
    if (!myArray[77]) {
        console.log("done");
    }
    
   
    
}
