// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(i);
      // console.log("Found Waldo at index", i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
