export const bubbleSort = (array) => {
    const animations = [];
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Compare array[j] and array[j + 1]
        animations.push([j, j + 1, 'compare']);
  
        if (array[j] > array[j + 1]) {
          // Swap array[j] and array[j + 1]
          animations.push([j, j + 1, 'swap']);
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  
    return animations;
  };