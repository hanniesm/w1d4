function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2
console.log(nextId()); // Logs: 2

console.log("-----------")

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var id = 0;


  return function() {
    /* your code here */
    return list[id++];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

console.log("-----------")

var countdownGenerator = function(x) {

  return function() {
    if (x > 0) {
      console.log("T-minus", x)
    }
    else if (x === 0) {
      console.log("Blast Off")
    }
    else {
      console.log("Rockets already gone, bub");
    }
      x--;
  }
    // console.log(id);
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

