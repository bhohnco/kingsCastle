
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

  //  filterBookData(bookData) {
  //   console.log(bookData.title)
  //    return {
  //     'title': bookData.title,
  //     'covers': bookData.covers,
  //     'description': bookData.description,
  //     'subjects': bookData.subjects,
  //     'key': bookData.key,
  //   };
  // }


  }
  export default utils;