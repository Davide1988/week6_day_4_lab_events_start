

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const input = document.querySelector("#new-item-form")
  input.addEventListener('submit', handleFromSubmit)

  const deleteAll = document.querySelector("#delete-all")
  deleteAll.addEventListener('click', handleDeleteAll)

})


  const handleDeleteAll = function(){
    const space = document.querySelector('#reading-list');
    space.innerHTML = " "
  }

  const handleFromSubmit = function(event) {
    event.preventDefault();

    const itemTitle = document.createElement('li');
    itemTitle.textContent = `Title: ${event.target.title.value}`
    const itemAuthor = document.createElement('li');
    itemAuthor.textContent = `Author: ${event.target.author.value}`
    const itemCategory = document.createElement('li');
    itemCategory.textContent = `Category: ${event.target.category.value}`

    const entry = document.createElement('ul');


    const space = document.querySelector('#reading-list');




    entry.appendChild(itemTitle);
    entry.appendChild(itemAuthor);
    entry.appendChild(itemCategory);

    space.appendChild(entry)


    const input = document.querySelector("#new-item-form")
    input.reset();

    // const deleteButton = document.createElement("button")
    // input.appendChild(deleteButton)
  }
