const uniqSort = function (arr) {
  const breadcrumbs = {};
  const result = [arr[0]]; //new array, to avoid problems with time and space coplexity//

  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      //check if we haven't seen it before
      result.push(arr[i]); // if we haven't seen it before, we gonna push that item into our result array
      breadcrumbs[arr[i]] = true; // we're going to run this operation, where we're saving a value to our object
    }
  }
  return result.sort((a, b) => a - b);
};
uniqSort([4, 2, 2, 3, 2, 2]); // => [2,3,4]

// loop throught the length of our list. Если мы уже нашли число (пример 2) оно обозначается true, и в будущем натыкаясь на него, так как оно уже является true, мы пропускаем наш condition (from 7-9 line)
//let i = 0; i < arr.length; i++ это часть сортирует наш код?
