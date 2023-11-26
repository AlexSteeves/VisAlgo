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
    doMerge(mainArray, startIndex, middleIndex, endIndex, pieceArray, animations);

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

    animations.push([i, j]);

    animations.push([i, j]);
    if (pieceArray[i] <= pieceArray[j]) {
 
      animations.push([k, pieceArray[i]]);
      mainArray[k++] = pieceArray[i++];
    } else {
  
      animations.push([k, pieceArray[j]]);
      mainArray[k++] = pieceArray[j++];
    }
  }
  while (i <= middleIndex) {
 
    animations.push([i, i]);
 
    animations.push([i, i]);
    
    animations.push([k, pieceArray[i]]);
    mainArray[k++] = pieceArray[i++];
  }
  while (j <= endIndex) {

    animations.push([j, j]);

    animations.push([j, j]);
  
    animations.push([k, pieceArray[j]]);
    mainArray[k++] = pieceArray[j++];
  }
}