export function mergeSortAnimation(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const pieceArray = array.slice();
    mergeSortHelper(array, 0, array.length -1, pieceArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray, 
    startIndex,
    endIndex,
    pieceArray,
    animations,
) {
    if(startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(pieceArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(pieceArray, middleIndex + 1, endIndex, mainArray, animations);
    DocumentFragment(mainArray, startIndex, middleIndex, endIndex, pieceArray, animations);

}


function doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex, 
    pieceArray, 
    animations,
){
    let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (pieceArray[i] <= pieceArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, pieceArray[i]]);
      mainArray[k++] = pieceArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, pieceArray[j]]);
      mainArray[k++] = pieceArray[j++];
    }
  }
  while (i <= middleIndex) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, pieceArray[i]]);
    mainArray[k++] = pieceArray[i++];
  }
  while (j <= endIndex) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, pieceArray[j]]);
    mainArray[k++] = pieceArray[j++];
  }
}