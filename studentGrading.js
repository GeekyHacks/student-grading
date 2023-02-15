function gradingStudents(grades) {
  // Write your code here

  let output = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 === 1) {
      output.push(grades[i]);
      console.log(output);
    }
    if (grades[i] >= 38 && grades[i] % 5 === 2) {
      output.push(grades[i]);
      console.log(output);
    }
    if (grades[i] >= 38 && grades[i] % 5 === 3) {
      output.push(grades[i] + 2);
      console.log(output);
    }
    if (grades[i] >= 38 && grades[i] % 5 === 4) {
      output.push(grades[i] + 1);
      console.log(output);
    }

    else  if (grades[i] < 38 && grades[i] > 5) {
      output.push(grades[i]);
      console.log(output);
    }
  }
  return output;
}

let result = gradingStudents([4, 73, 67, 38, 33]);
console.log(result);
