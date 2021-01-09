
let inputForm = document.getElementById('input-form');
let text = document.getElementById('input-value');
let list = document.querySelector('.list-items');
let clear = document.querySelector('.clearBtn');
let feedback = document.querySelector('.feedback');

let GroceryList = [];

// Form event listener
inputForm.addEventListener('submit', function (e) {
 e.preventDefault();
 let value = text.value;
 if (value === '') {
  showFeedback('please enter some value', 'alert-danger');
 } else {

  // add to the list
  addItem(value);

  // add to local storage
  localStorage.setItem('list', JSON.stringify(GroceryList));
 }
});

// delete one item
list.addEventListener('click', function (e) {
 if (e.target.parentElement.classList.contains('remove-icon')) {
  let actual = e.target.parentElement.parentElement;
  list.removeChild(actual);
  let removedItem = actual.children[0].textContent;
  GroceryList = GroceryList.filter(function (i) {
   return i !== removedItem;
  });
  console.log(GroceryList);
 }

})

// delete all items
clear.addEventListener('click', function () {
 GroceryList = [];
 while (list.children.length > 0) {
  list.removeChild(list.children[0])
 }
 // add to local storage
 localStorage.setItem('list', JSON.stringify(GroceryList));
 console.log(GroceryList);
})

// show feedback function
function showFeedback(text, action) {
 feedback.classList.add('showItem', `${action}`);
 feedback.innerHTML = `<p>${text}<p>`;
 setTimeout(function () {
  feedback.classList.remove('showItem', `${action}`);
 }, 3000);
};

// adding items to the list 
function addItem(value) {
 let div = document.createElement('div')
 div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2')
 div.innerHTML = `<h5 class="item-title text-capitalize">${value}</h5>
  <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`
 list.appendChild(div)
 text.value = '';
 showFeedback('item added', 'alert-success');

 // add to the arry

 GroceryList.push(value)
 console.log(GroceryList);
}

