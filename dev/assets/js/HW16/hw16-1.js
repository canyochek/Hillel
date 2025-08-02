function Student(name, surname, birthday, grades = [], presents = []) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.grades = grades;
  this.presents = [];

  this.getAge = function() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    console.log(currentYear - Number(this.birthday))
  }

  this.addAbsent = function() {
    if (presents.length < 25) {
      presents.forEach((presents) => {
      if (presents === true) {
        this.presents.push(presents)
      }})
    } else {
      console.log("Масив відвідуваності заповнений!");
    }
  };

  this.addPresent = function() {
    if (presents.length < 25) {
      presents.forEach((presents) => {
      if (presents === false) {
        this.presents.push(presents)
      }})
    }
  };

  this.getSummary = function() {

    const sumGrades = this.grades.reduce((accum, grade) => accum + grade, 0);
    const avgGrade = sumGrades / this.grades.length;

    const sumPresent = this.presents.reduce((accum, present) => accum + (present === true ? 1 : 0), 0)
    const avgPresent = sumPresent / this.presents.length

    if(avgGrade >= 90 && avgPresent >= 0.9) {
      console.log("Молодець!")
    } else if(avgGrade >= 90 && avgPresent < 0.9 || avgGrade < 90 && avgPresent >= 0.9) {
      console.log("Добре, але можна краще")
    } else if(avgGrade < 90 && avgPresent < 0.9) {
      console.log("Редиска")
    }
  }
  
}

const student1 = new Student("Sanya", "Shishkovich", 2006, [100, 100, 100], [true, true, true])
student1.getAge()
student1.addAbsent()
student1.addPresent()
student1.getSummary()