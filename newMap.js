var books = ["Witches Abroad", "Wyrd Sisters", "Snuff"];


var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fct) {
  var newArray = [];
  arr.forEach(function(element) {
    newArray.push(fct(element))
    })
  console.log(newArray);
  }


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log("--------------------")


map(books, function(book) {
  return book.length;
});

map(books, function(book) {
  return book.toUpperCase();
});

map(books, function(book) {
  return book.split('').reverse().join('');
});

map(books, function(book) {
  return book + " is great";
})
