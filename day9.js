// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('myDiv').textContent = "New Text Content";


// Task 2: Select an HTML element by its class and change its background color.
var elements = document.getElementsByClassName('myClass');
for(var i=0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "lightgreen";
}

// Task 3: Create a new div element with some text content and append it to the body.
var newDiv = document.createElement("div");
newDiv.textContent = "I'm a newly added div!";
document.body.appendChild(newDiv);


// Task 4: Create a new 11 element and add it to an existing ul list.
var newListElement = document.createElement("li");
newListElement.textContent = "A new list item";
document.getElementById("myList").appendChild(newListElement);

// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("removeMe").remove();


// Task 6: Remove the last child of a specific HTML element.
document.getElementById("myUl").lastChild.remove();

// Task 7: Select an HTML element and change the of its attributes (e.g., src of an img tag).
document.getElementById("myImage").setAttribute("src", "new_image.jpg");

// Task 8: Add and remove a CSS class to/from an HTML element.

// Adding a class
document.getElementById("myDiv").classList.add("myClass");

// Removing a class
document.getElementById("myDiv").classList.remove("myClass");

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("myParagraph").textContent = "Text changed on click.";
  });

//   Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("borderChangeDiv").addEventListener("mouseover", function() {
    this.style.borderColor = "red";
  });
  
  document.getElementById("borderChangeDiv").addEventListener("mouseout", function() {
    this.style.borderColor = "";
  });