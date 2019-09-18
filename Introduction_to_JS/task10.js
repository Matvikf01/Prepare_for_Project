
var capitals = function(word) {
  let indexArray = [];

  for (let index = 0; index < word.length; index++) {
    if (word[index].toUpperCase() === word[index]) {
      indexArray.push(index);
    }
  }
  return indexArray;
};

console.log(capitals("TenTasK"));
