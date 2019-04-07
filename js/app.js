document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  //form
  const form = document.querySelector('#task-form');
  const handleFormAdd = function (event) {
    event.preventDefault();

    //Selected #content assigned to variable result
    const resultTaskList = document.querySelector('#content');

    //Const capturing the event target values
    const taskName = event.target[0].value;
    const taskDescription = event.target[1].value;
    const taskDueDate = event.target[2].value;
    const taskTagSelect = event.target[3].value;

    // list items captures in const to append to resultTaskList
    const listItemName = document.createElement('h3');
    listItemName.textContent = taskName;
    listItemName.classList.add('heading');

    const listItemDescription = document.createElement('p');
    listItemDescription.textContent = taskDescription;
    listItemDescription.classList.add('description');

    const listItemDate = document.createElement('p');
    listItemDate.textContent = `Due Date: ${taskDueDate} | ${taskTagSelect}`;
    listItemDate.classList.add('date');

    resultTaskList.appendChild(listItemName);
    resultTaskList.appendChild(listItemDescription);
    resultTaskList.appendChild(listItemDate);

    //Reseting the form
    document.getElementById('task-form').reset();
  };

  form.addEventListener('submit', handleFormAdd);

  const clearForm = document.querySelector('#delete');
    const handleFormDelete = (event) => {
      event.preventDefault();

      const resultList = document.querySelector('#content');
      const children = document.querySelectorAll('.heading, .description, .date');

      children.forEach((child) => {
        resultList.removeChild(child);
      });
    };

    clearForm.addEventListener('submit', handleFormDelete);
});
//   //Select dropdown
//   const selectDropdown = document.querySelector('#tag-selector');
//
//   const handleSelect = function(event) {
//     const resultSelected = event.target.value;
//     function changeColor(event) {
//       let blue = document.getElementById('blue');
//       let green = document.getElementById('green');
//       let orange = document.getElementById('orange');
//       let purple = document.getElementById('purple');
//
//       if(event.target.value === blue){
//         blue.style.color = "blue";
//       } else if (event.target.value === green) {
//         green.style.color = "green";
//       } else if (event.target.value === orange) {
//         orange.style.color = "orange";
//       } else if (event.target.value === purple){
//         purple.style.color = "purple";
//       } else {
//         alert("There was an error");
//       }
//     };
//     handleSelect.changeColor()
//     selectDropdown.addEventListener('change', handleSelect);
