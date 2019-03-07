var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



var sortedNames = students.sort(function (a, b) {
  var nameA = a.name;
  var nameB = b.name;
  var ageA = a.age;
  var ageB = b.age;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA === nameB && ageA < ageB) {
    return -1;
  }
  return 1;
})

console.log(sortedNames);

// var sortedAge = students.sort(function (a, b) {
//   return b.age - a.age;
// })

// console.log(sortedAge);

// var myArray = [10, 5, 9, 1, 2];

// var sortedArray = myArray.sort(function(a,b) {
//   return a - b;
// })

// console.log(sortedArray);



