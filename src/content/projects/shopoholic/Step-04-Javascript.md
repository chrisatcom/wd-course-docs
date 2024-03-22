Open the `app.js` file in your editor.

All the following code will go in your `app.js` file.

## Storing the shopping list items

Create a variable to store the list items in. In this case we'll create a variable called `shoppinglist` and set it to an array. _An array_ is used to store a list of values.

```js
// Create an array to hold the shopping list items.
let shoppinglist = [];
```

Since there is nothing inside the `[]`, the array is currently empty.

## Store references to HTML elements

Let's create 3 new variables and store references to the form, the input inside the form and the unordered list where our items will be listed.

We can use the `id` values we put on the HTML elements to target the elements. Using `document.querySelector()` we'll target each element using their corresponding id. _Note_ be sure to add the `#` sign before the id name.

_Example:_ If we are targeting this html element `<form id="form">` then we'll write this `document.querySelector('#form')`.

Add this code after the shoppinglist code you created earlier to reference each HTML element.

```js
// Get a reference to the form element.
let form = document.querySelector("#form");

// Get a reference to the item input.###
let newitem = document.querySelector("#item");

// Get a reference to the shopping list UL.
let list = document.querySelector("#list");
```

## Capturing the Form Data

### Adding an Event Listener

To track when the form is submitted we'll add an event listener to our `form` variable we created. Inside the parenthesis the first item is the event we want to listen for. In this case `"submit"`. The second item is the name of a function we want to run once the event happens.

```js
// Event listener that listens for a 'submit' event and then calls the 'addItem' function.
form.addEventListener("submit", addItem);
```

### Creating the Callback for the Event

After an event fires, we send that information to a function to perform any actions we want on it. In this instance we want to perform the following actions to add our new item.

First we'll create our function that will run when the form is submitted. Add the following to your script to create the function.

The rest of the code in this section will go in between the function's `{ }` curly braces. _This is where the guts of our logic will go._

**01 - Functions Shell**

```js
// Add Item Function.
function addItem(event) {
	// ... rest of code here ...
}
```

**02 - Prevent the default behaviour of the form.**<br /> (which is submitting the form to a page on our site. This will cause a page reload which we don't want to happen since everything should occur on this one page without the need to refresh)

Add this code to the function.

```js
// Prevent the form from submitting.
event.preventDefault();
```

**03 - Check to make sure the user entered text into the input field.**<br /> We don't want someone submitting the form with no information in it. Otherwise we'll just have a bunch of blank items.

Add this code to the function. This is a conditional (if/else statement) that checks to see if the value in the input field is blank or not. If it is blank then we can call an `alert()` with the message we want to convey to the.

The `return` at the end tells the code to stop executing code in this function. That way the rest of the code in this function won't run.

```js
// Make sure the input has text in it.
if (newitem.value === "") {
	alert("Please add a new item.");

	// Break out of the function.
	return;
}
```

Now don't get confused with the previous block of code. All of it goes inside the function we are currently writing (all inside the function's `{ }` curly braces). This conditional has it's own set of curly braces.

All the curly braces do is encapsulate (contain) the code for a particular block of code.

**04 - Add the new item to our shopping list array.**

To add an item onto an array we can use the `push()` method associated with the array variable. In this case the `shoppinglist` array.

Inside the `()` we'll add the data we want to add to the array. Here we're adding the `value` of the input element we referenced with the variable `newitem`.

```js
// Add new item object to array.
shoppinglist.push(newitem.value);
```

**05 - Clearing the text from the input field once the form is submitted.**

Once our data is added to the array we can set the input value to an empty string to remove the text that was previously typed in.

```js
// Clear out the input.
newitem.value = "";
```

**Full Code Block for the Add Item Function**

Here's the finished complete code block for our Add Item Function

```js
// Add Item function.
function addItem(event) {
	// Prevent the form from submitting.
	event.preventDefault();

	// Make sure the input has text in it.
	if (newitem.value === "") {
		alert("Please add a new item.");

		// Break out of the function.
		return;
	}

	// Add new item object to array.
	shoppinglist.push(newitem.value);

	// Clear out the input.
	newitem.value = "";
}
```

### Testing the Function

Now that we have the function built we should test it to make sure the data from the form is being added to our array. Currently we're not adding the array items to the webpage. We'll build that functionality in a minute.

We can temporarily use the console on the webpage to see if items are being added to the shopinglist array.

1. Open the Developer Tools for the page
2. Open the Console.
3. Before adding anything type `shoppinglist` (the name of the array variable) into the console. You should see an arrow with an empty brackets `[]` like the screenshot below.

![Console screenshot with empty array](/images/projects/shopoholic/ss-04-console-array.png)

4. Type something into the new item input and click the add button. Do it one more time so that you have two items in the array.
5. Type `shoppinglist` into the console again. This time you should see two items in the `[]` brackets. It should resemble the below screenshot.

![Console screenshot with empty array](/images/projects/shopoholic/ss-05-console-array.png)

Next part is writing some logic to show our items on the screen.

## Displaying the List on the Page

In order to display our `shoppinglist` array on the screen, we'll need to loop through the array and add a new `li` element to the `ul` element on the page. Sounds complicated but we can accomplish this with a few steps.

### Create a Function to Show Array Items

Like before first we'll create a new function to hold our logic for this process.

```js
// Show Items Function
function showItems() {
	// ... rest of code here ...
}
```

### Referencing showItems() in addItem()

Before we continue building the `showItems()` function to show the data on the screen, we should adjust our code so that we call this new function each time a new item is added from the form.

To do this we'll add the following code to the end of the `addItem()` function directly after the line `newitem.value = "";`.

```js
// Show the new item on the screen.
showItems();
```

Now each time we add a new item it will run the code inside the showItems function and add the new item to the screen.

### Looping Through the Shopping List Array

The rest of the code in this section will go in between our new `showItems()` function's `{ }` curly braces.

We'll use a diffent kind of loop for this, which hopefully is a little easier to understand vs. the previous ones we've used. This loop is called a 'For Of' loop.

```js
// Loop through all the array items.
for (let item of shoppinglist) {
	// Test, console log the results to see what we get.
	console.log(item);
}
```

Add a few items to the form to see if they are properly logging in the console. Here I've added Sushi and then Sashimi.

!['Console Log Add Item'](/images/projects/shopoholic/ss-06-console-log-additem.png)

### Creating and Adding Items to the DOM

Now that we know our code is working we can remove the test `console.log()` code from the loop and add in the rest of the logic we need to create a new element.

Inside our for loop add the following code.

```js
// Create a new li element.
let li = document.createElement("li");

// Add the current loop item to the li.
li.innerText = item;

// Add/Append the new li element to the unordered list we referenced earlier.
list.appendChild(li);
```

The code for the completed `showItems()` function should resemble this now.

```js
// Show Items Function
function showItems() {
	// Loop through all the array items.
	for (let item of shoppinglist) {
		// Create a new li element.
		let li = document.createElement("li");

		// Add the item text to the new li element.
		li.innerText = item;

		// Add/Append the new li element to the unordered list we referenced earlier.
		list.appendChild(li);
	}
}
```

### Fixing a Small Bug with Show Items

When I test the code by inputing the following items (Sushi, Sashimi, Sake), the items are added to the screen, but they get duplicated each time a new item is submitted. The screenshot below shows the issue.

!['Console Log Add Item'](/images/projects/shopoholic/ss-07-add-items-to-dom.png)

One way to fix this is to clear the list on the screen each time the `showItems()` function is called. This will create a clean slate each time so duplicates aren't shown accidentally.

Add a new line of code inside the `showItems()` function at the very top (right above the for loop).

```js
// First clear out any current data.
list.innerHTML = "";
```

What this does is removes all the HTML inside the UL element.

Now when we add in items to the form, the values aren't repeated each time.

!['Console Log Add Item'](/images/projects/shopoholic/ss-08-add-items-to-dom-norepeat.png)

## Adding a Button to Clear the List

Last thing we'll add to this little app is a button to clear the entire list.

To do this we'll add a new button in our HTML code, add an event listener to it in JavaScript and create a simple callback function to clear the list.

### The HTML Portion

Open up the `index.html` file.

Create a `button` element with text 'Clear List' after the `ul` element and right before the closing `<div>` for `#app`.

```html
<button>Clear List</button>
```

Next let's give it an `id` of `clearbtn` so we can target it with JavaScript and add a click event listener to it.

```html
<button id="clearbtn">Clear List</button>
```

While we're in the HTML file, let's remove the hard coded 'Dumplings' list item in our `ul` element. Just delete the entire `li` element. It'll look like the below code after.

```html
<ul class="shopping-list" id="list"></ul>
```

### The JavaScript Portion

Open up the `app.js` file.

If you'd like to challenge yourself try accomplishing the following in your JavaScript to get the clear list button working on your own. If you have trouble or get stuck you can check out [the final code](/projects/shopoholic/05-final-js-code) for this portion on the next page.

Here are the steps you'll need to do:

1. Create a variable to store a reference to the `button` element you created.
2. Add an event listener to the button for a 'click' event. This will follow the same format we did for the 'sumbit' event listener on the form (except its 'click' not 'submit').
3. Create a callback function to hold the logic for clearing the list.
4. In the callback function you create have the code do these two things: a. Set the shoppinglist to an empty array. b. Clear the data on the screen like you did for the `showItems()` function.

## Final App Build

Once finished your app should resemble the below video.

<video controls poster="/images/projects/shopoholic/ss-09-final-app-build.png">
  <source src="/images/projects/shopoholic/vid-00-final-app.mp4" type="video/mp4" />
</video>
