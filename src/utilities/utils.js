
const utils = {

  // removeDuplicates(objectArray) {
  //   return objectArray.reduce((finalOutput, currentObj) => {
  //     const findTitle = finalOutput.find(item => item.title === currentObj.title);
  //     if (!findTitle) {
  //       // finalOutput.key = toString().split('/')[2];
  //       return finalOutput.concat([currentObj]).sort()
  //     }
  //     return finalOutput
  //   }, [])
  // }

   randomArrayShuffle(array) {
     let currentIndex = array.length, temporaryValue, randomIndex;
     while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
     }
     return array;
   }
  }
  export default utils;