document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  //form
  const form = document.querySelector('#task-form');
  const handleFormAdd = function (event) {
    event.preventDefault();

    const resultList = document.querySelector('#table');

    const tableListTasks = document.querySelector('#task-list');

    const listItems = document.createElement('td');
    listItems.classList.add('tasks');

    listItems.textContent = `${event.target[0].value} ${event.target[1].value} ${event.target[2].value} ${event.target[3].value}`;

    document.getElementById('task-form').reset();

    tableListTasks.appendChild(listItems);
  };

  form.addEventListener('submit', handleFormAdd);

  const clearForm = document.querySelector('#delete');
    const handleFormDelete = (event) => {
      event.preventDefault();

      const resultList = document.querySelector('#task-list');
      const children = document.querySelectorAll('.tasks');

      children.forEach((child) => {
        resultList.removeChild(child);
      });
    };

    clearForm.addEventListener('submit', handleFormDelete);
});
