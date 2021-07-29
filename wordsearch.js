// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

// module.exports = wordSearch


// const transpose = function(matrix) {
//     let output = [];
//     for (let row in matrix[0]) {
//       let array = [];
//       for (let column in matrix) {
//         array.push(matrix[column][row]);
//       }
//       output.push(array);
//     }
//     return output;
//   };
  
//   const wordSearch = (letters, word) => {
//     let wordFound = false;
//     const horizontalJoin = letters.map(ls => ls.join(''));
//     for (let l of horizontalJoin) {
//       if (l.includes(word)) {
//         wordFound = true;
//       }
//     }
//     const transposeSearch = transpose(letters);
//     const verticalJoin = transposeSearch.map(lts => lts.join(''));
//     for (let lts of verticalJoin) {
//       if (lts.includes(word)) {
//         wordFound = true;
//       }
//     }
//     return wordFound;
//   };
  
//   module.exports = wordSearch;



  const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls =>ls.join(''));
    // console.log(horizontalJoin);
    // console.log(verticalJoin);
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      } else {
        for (l of verticalJoin) {
          if (l.includes(word)) {
            return true;
          }
        }
      }
    }
    return false;
}
const transpose = function (letters) {
    let value = [];
    for (let i = 0; i < letters[0].length; i++) {
      value[i] = [];
    };
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[0].length; j++) {
        value[j][i] = letters[i][j];
      }
    } return value;
  }