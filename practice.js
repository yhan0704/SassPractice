// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join("|")
    console.log(result);
    
//   fruits.forEach(fruit => console.log(fruit))
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  let fruitsForArray = fruits.split(',');
//   console.log(fruitsForArray);
  
//   array = []
//   array.push(fruits)
//   console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse()
//   console.log(array);
  
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0,2)
//   console.log(array);
  
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // students.forEach(student => {
    //     if(student.score === 90){
    //         console.log(student);
    //     }
    // })
    let result = students.find(student => student.score === 90);
    // console.log(result);
    
}

// Q6. make an array of enrolled students
{
    // students.forEach(student => {
    //     if(student.enrolled === true){
    //         // console.log(student);
    //     }
    // })
    let result = students.filter(student => student.enrolled == true);
    // console.log(result[0]);
    
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // let array = []
    // students.forEach(student => {
    //     array.push(student.score)
    // })
    // console.log(array);
    let student = students.map(student=> student.score)
    // console.log(student);
    
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
    let reduce = students.reduce((prev,curr) => prev+curr.score,0)
    let result = reduce/students.length;
    console.log(result);  
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let score = []
    students.forEach(student => {
        score.push(student.score)
    })
    let toString = score.toString()
    // console.log(toString);
    
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let score = []
    students.forEach(student => {
        score.push(student.score)
    })
    let toString = score.sort().toString()
    // console.log(toString);
}