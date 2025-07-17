const exerciseList = document.querySelector("ul")
const btnAdd = document.querySelector(".addExercise")
const inputField = document.querySelector(".exercises")

btnAdd.addEventListener ('click', function() {

  const deleteList = document.createElement('button')
  deleteList.textContent = 'Видалити'
  const checkField = inputField.value.trim();

  if (checkField !== ''){
    const newElement = document.createElement('li')
    
    newElement.textContent = checkField
    newElement.append(deleteList)
    exerciseList.append(newElement)

    deleteList.addEventListener ('click', function() {
      newElement.remove();
    })
  }
})