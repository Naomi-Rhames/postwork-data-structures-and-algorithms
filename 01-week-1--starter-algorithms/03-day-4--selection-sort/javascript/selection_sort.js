function selectionSort(arr) {

  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

  // let newArray = []
  // let z
  // for( let i = 0; i < arr.length - 1; i++){
  //   for(let j = i + 1; j > 0; j--){
  //     if( arr[j] < arr[i]){
  //       z = arr[j]
  //       arr[j] = arr[i]
  //       arr[i] = z
  //     }
  //   }
  // }
  // return arr



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;


