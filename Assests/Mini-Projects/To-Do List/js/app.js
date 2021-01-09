(function () {
 let form = document.getElementById('itemForm');
 let input = document.getElementById('itemInput');
 let clear = document.getElementById('clear-list');
 let itemList = document.querySelector('#item-list')
 let feedback = document.querySelector('.feedback');

 let itemData = JSON.parse(localStorage.getItem('list')) || [];


 form.addEventListener('submit', function (e) {
  e.preventDefault();
  let value = input.value;

  if (value === '') {
   showFeedback('please enter value', 'danger')
  }
  else {
   // add items to the list
   addItem(value);

   // clear the form
   input.value = '';

   // adding items to the array
   itemData.push(value);

   // add items to local storage
   localStorage.setItem('list', JSON.stringify(itemData));

   // event listeners to icons
   handleItems(value);
  }
 });

 // show feedback
 function showFeedback(text, action) {
  feedback.classList.add('showItem', `alert-${action}`)
  feedback.textContent = text;
  setTimeout(function () {
   feedback.classList.remove('showItem', `alert-${action}`)
  }, 3000);
 };

 // adding items to the list
 function addItem(text) {
  let div = document.createElement('div');
  div.classList.add('item', 'my-3');
  div.innerHTML = `
   <h5 class="item-name text-capitalize">${text}</h5>
   <div class="item-icons">
    <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
    <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
    <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
   </div>
   `;
  itemList.appendChild(div);
 }

 // event listeners to icons
 function handleItems(wnks) {
  let items = itemList.querySelectorAll('.item');
  items.forEach(function (item) {
   if (item.querySelector('.item-name').textContent === wnks) {
    // complete event listener
    item.querySelector('.complete-item').addEventListener('click', function () {
     item.querySelector('.item-name').classList.toggle('completed')
    })
    // edit event listener
    item.querySelector('.edit-item').addEventListener('click', function () {
     input.value = wnks;
     itemList.removeChild(item);
     itemData = itemData.filter(function (item) {
      return item !== wnks;
     });
     localStorage.setItem('list', JSON.stringify(itemData));
    })
    // delete event listener
    item.querySelector('.delete-item').addEventListener('click', function () {
     itemList.removeChild(item);
     itemData = itemData.filter(function (item) {
      return item !== wnks;
     });
     showFeedback('item Deleted', 'danger');
     localStorage.setItem('list', JSON.stringify(itemData));
    })
   }
  });
 }

 // clear the entire list
 clear.addEventListener('click', function () {
  itemData = [];
  localStorage.removeItem('list');
  let items = itemList.querySelectorAll('.item');
  items.forEach(function (item) {
   itemList.removeChild(item);
  });
 });
 console.log(itemData);
})();