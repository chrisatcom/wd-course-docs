## Topics to cover in exercise

1. Accessing elements
2. Selecting an element from a nodelist
3. Looping through a nodelist
4. Traversing the DOM
5. Whitespace nodes
6. Updating text content
7. Adding/removing HTML content
8. Adding/removing elements
9. Attribute nodes

## Accessing Elements

All the examples are using the following HTML code.

```html
<div id="app">
	<h1>Grocery List</h1>

	<ul id="groceries">
		<li id="one" class="hot"><em>Fresh</em> Figs</li>
		<li id="two" class="hot">Pine Nuts</li>
		<li id="three" class="hot">Honey</li>
		<li id="four">Balsamic Vinegar</li>
	</ul>
</div>
```

### Returning a Single Element

`getElementById()`

```js
// Get the first list item by id.
let item = document.getElementById("one");

// Change the class to the cool color.
item.className = "cool";
```

`querySelector()`

```js
// Select the second item using query selector.
let item2 = document.querySelector("#two");

// Change the color to complete.
item2.className = "complete";
```

### Selecting Multiple Elements

`getElementsByTagName()`

```js
let title = document.getElementsByTagName("h1");
```

`getElementsByClassName()`

```js
// A list will be returned with all elements that have a class of 'hot'.
let hot = document.getElementsByClassName("hot");
```

`querySelectorAll()`

```js
let items = document.querySelectorAll("li");
```

This returns a list of 'li' items. Which can be accessed using the array syntax `items[1]`.

![Console example image](/images/exercises/js-dom-console-1a.png)

```js
// Change the class on the 3rd item to cool.
items[2].className = "cool";
```

## Looping Through a Node List

This example shows two different ways to loop. The first uses the classic 'for' loop sytax. The second uses the newer 'forEach' syntax.

```js
let items = document.querySelectorAll("li");

// Loop through a nodelist and change each class to be cool.
// Classic for loop
for (let i = 0; i < items.length; i++) {
	items[i].className = "cool";
}

// or use a foreach loop to set them all to 'hot'.
items.forEach(function (item) {
	item.className = "hot";
});
```

## Traversing the DOM

### Parent Element

`parentElement`

```js
// parentElement
let child = document.getElementById("two");
// Select the parent element.
child.parentElement;
```

### Child and Sibling Elements

`firstElementChild` and `lastElementChild`

```js
// Store the unordered list.
let list = document.querySelector("#groceries");

// Grab the first child element.
let firstChild = list.firstElementChild;

// Grab the last child element.
let lastChild = list.lastElementChild;
```

## Working with Text and HTML content.

`textContent`

```js
// Change the text value of the first list item.
list.firstElementChild.textContent = "Dumplings";
```

`innerHTML`

```js
// Adding and removing HTML content from an element.
// Change the inner html to 'sush rolls'.
list.lastElementChild.innerHTML = "<em>Sushi Rolls</em>";

// Clear out the inner html.
list.lastElementChild.innerHTML = "";
```

### Remove a Child Element

`removeChild`

```js
// Remove a child element, this removes the last item in the list.
list.removeChild(list.lastElementChild);
```

### Creating an Element

`createElement`

```js
// Create a new h2 element.
let newEl = document.createElement("h2");

// Add some text to the new h2 element.
newEl.textContent = "New Heading";

// Check in the console for the new element.
console.log(newEl);
```

## Working with Attributes

`setAttribute`

```js
// Create an element.
let newItem = document.createElement("li");

// Add id, class and data attributes.
newItem.setAttribute("id", "five");
newItem.setAttribute("class", "cool");
newItem.setAttribute("data-new-item", "true");

// Add the content to the item.
newItem.innerHTML = `Shrimp`;

// Add the element to the list.
list.appendChild(newItem);
```
