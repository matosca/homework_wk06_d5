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

    //Main Container for resulted list created
    // const mainContent = document.createElement('div');
    // mainContent.classList.add('task-list');

    // list items captures in const to append to resultTaskList
    const listItemName = document.createElement('h5');
    listItemName.textContent = taskName;
    listItemName.classList.add('heading');

    const listItemDescription = document.createElement('p');
    listItemDescription.textContent = taskDescription;
    listItemDescription.classList.add('description');

    const listItemDate = document.createElement('p');
    listItemDate.textContent = `Due Date: ${taskDueDate} | ${taskTagSelect}`;
    listItemDate.classList.add('date');

    // const listItemTag = document.createElement('span');
    // listItemTag.textContent = taskTagSelect;
    // listItemTag.classList.add('tag');

    resultTaskList.appendChild(listItemName);
    resultTaskList.appendChild(listItemDescription);
    resultTaskList.appendChild(listItemDate);

    // listItems.textContent = `${event.target[0].value} ${event.target[1].value} ${event.target[2].value} ${event.target[3].value}`;
    // resultTaskList.appendChild(listItems);

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
