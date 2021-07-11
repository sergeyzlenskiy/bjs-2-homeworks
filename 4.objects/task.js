function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
  return this.subject;
};

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  this.mark = mark;
  if(this.marks === undefined){this.marks = [this.mark];} else {this.marks.push(this.mark);}
  return this.marks;
};

Student.prototype.addMarks = function (...units) {
  if(this.marks === undefined) {
    this.marks = [];
    for (let i of units) {
      this.marks.push(i);
    }
  } else {
      for (let j of units) {
        this.marks.push(j);
    }
  } 
  return this.marks;
};

Student.prototype.getAverage = function() {
  let sum = 0, avg;
  this.marks.forEach((item, idx) => {
    sum += item;
  });
  avg = sum/this.marks.length;
  this.avg = avg;
  return avg;
};

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};

// const student1 = new Student("Ivan", "male", 25);
// student1.setSubject("Algebra");
// student1.addMark(5);
// student1.addMark(4);
// student1.addMark(5);
// student1.addMarks(5, 4, 4, 3, 5);
// student1.addMarks(2, 3, 2);
// student1.getAverage();
// student1.exclude('low grades');
// console.log(student1);