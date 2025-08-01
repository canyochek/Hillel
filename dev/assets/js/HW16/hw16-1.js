function student(name, surname, birthday, grades = [], presents = []) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.grades = grades;
  this.presents = presents.length > 0 ? presents : new Array(25);

  this.getAge = function() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthday);
  };

  this.getSummary = function() {
    let sumGrades = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sumGrades += this.grades[i];
    }
    const avgGrade = sumGrades / this.grades.length;

    let sumPresent = 0;
    let attendedLessons = 0;
    for (let i = 0; i < this.presents.length; i++) {
      if (this.presents[i] === true) {
        sumPresent++;
        attendedLessons++;
      } else if (this.presents[i] === false) {
        attendedLessons++;
      }
    }

    const avgPresent = attendedLessons > 0 ? sumPresent / attendedLessons : 0;

    if (avgGrade >= 90 && avgPresent >= 0.9) {
      console.log("Молодець!");
    } else if ((avgGrade >= 90 && avgPresent < 0.9) || (avgGrade < 90 && avgPresent >= 0.9)) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска");
    }
  };
}


const student1 = new student("Sanya", "Shishkovich", 2006, [100, 100, 100], [true, true, false, true]);
student1.getSummary();
student1.getAge()

const student2 = new student("Maria", "Tarasinka", 2002, [10, 10, 10], [false, false, false, true]);
student2.getSummary();
student2.getAge()
