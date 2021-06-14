
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
  //   console.log(bookData)
  //    return {
  //     'title': bookData.entries.title,
  //     'covers': bookData.entries.covers,
  //     'description': bookData.entries.description,
  //     'subjects': bookData.entries.subjects,
  //     'key': bookData.entries.key,
  //   };
  // }


  }
  export default utils;