
const utils = {
  removeDuplicates(objectArray) {
    return objectArray.reduce((finalOutput, currentObj) => {
      const findTitle = finalOutput.find(item => item.book_title === currentObj.book_title);
      if (!findTitle) {
        return finalOutput.concat([currentObj]).sort((a, b) => a.book_tiltle - b.book_title)
      }
      console.log(finalOutput)
      return finalOutput
    }, [])
  }
}
  export default utils;