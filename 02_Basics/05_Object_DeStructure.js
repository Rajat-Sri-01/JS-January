// ************** De-Structure *****************
const state = {
    cityname: "Kanpur",
    cityname2: "Delhi",
    cityname3: "Noida",
}
const {cityname3: MyCity} = state
console.log(MyCity);
// here cityname3: MyCity} = state, cityname3 is deconstruct as a MyCity, so for further calling we can use MyCity as a reference of cityname3 in state object.

const {cityname: HomeCity} = state
console.log(HomeCity);

console.log(state);

//********* JSON **************

// {
//     "id" : "123",
//     "name" : "Rajat"
//     "city" : "Mumbai"
// }

// json data

[
{},
{},
{},
] //// json data in form of ARRAY