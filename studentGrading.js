function gradingStudents(grades) {
  let output = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      output.push(grades[i]);
      if (output[i] % 5 === 4) {
        output[i] = output[i] + 1;
      }
      if (output[i] % 5 === 3) {
        output[i] = output[i] + 2;
      }
    } else {
      output.push(grades[i]);
    }
  }
  return output;
}

let result = gradingStudents([4, 73, 67, 38, 33]);
console.log(result);


/*we need an output array to push the right grades that meets the right conditions
and we chose 37 instead 38 because 38 is included in the inquired conditions for grading*/ 