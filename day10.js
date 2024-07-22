// Task 1: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textParagraph').textContent = 'Text Changed';
  });

//   Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById('toggleImage').addEventListener('dblclick', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
  });

//   Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('colorBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
  });

//   Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('colorBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'red';
  });

// Task 5: Add a keydown event listener to an input field that logs the key pressed the console.
document.getElementById('logKeyInput').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });

//   Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('inputField').addEventListener('keyup', function() {
    document.getElementById('displayValue').textContent = this.value;
  });

//   Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log(Object.fromEntries(formData));
  });

//   Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('selectDropdown').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = this.value;
  });

//   Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. 
document.getElementById('listItems').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
      console.log(event.target.textContent);
    }
  });

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

// Example of dynamically adding an element
const newItem = document.createElement('div');
newItem.textContent = 'New Item';
document.getElementById('parentElement').appendChild(newItem);

// Adding an event listener to the parent that listens for clicks on children
document.getElementById('parentElement').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'DIV') {
    console.log('Clicked on a dynamically added child:', event.target.textContent);
  }
});