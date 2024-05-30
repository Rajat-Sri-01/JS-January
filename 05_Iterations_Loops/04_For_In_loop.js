const array = [1,2,3,4,5]
// for (const key in array) {
//    console.log(key);
// } // here it gives the index values as in key
// op : 0 1 2 3 4

for (const key in array) {
    // console.log(`${key} : ${array[key]}`);
}
// op 0 : 1
// 1 : 2
// 2 : 3
// 3 : 4
// 4 : 5

for (const key in array) {
    if (array[key] > 2) {
    //    console.log(`${key} : ${array[key]}`);
        
    }
}
// op :
// 2 : 3
// 3 : 4
// 4 : 5



const map = new Map()

map.set('State', "UP")
map.set('State2', "MP")
map.set('State3', "UT")
map.set('State4', "HP")

for (const key in map) {
    console.log(key);
} // here it will not work and run/execute
// here map is not iterable