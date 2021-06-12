
const utils = {

  removeDuplicates(objectArray) {
    return objectArray.reduce((finalOutput, currentObj) => {
      const findTitle = finalOutput.find(item => item.title === currentObj.title);
      if (!findTitle) {
        // finalOutput.key = toString().split('/')[2];
        return finalOutput.concat([currentObj]).sort()
      }
      return finalOutput
    }, [])
  },

    // removeWorks(book) {
    //   return book.key.toString().split('/')[2];
    // }
  }
  export default utils;