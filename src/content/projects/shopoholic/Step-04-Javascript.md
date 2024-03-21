Open the `app.js` file in your editor.

All the following code will go in your `app.js` file.

## Storing the shopping list items

Create a variable to store information in. In this case we'll create a variable called `shoppinglist` and set it to an array. _An array_ is used to store a list of values. This will be good to store each list item in.

Since there is nothing inside the `[]`, the array is currently empty.

```js
// Create an array to hold the shopping list items.
let shoppinglist = [];
```

## Store references to HTML elements

Let's create 3 new variables and store references to the form, the input inside the form and the unordered list where our items will be listed.

We can use the `id` values we put on the HTML elements to target the elements. Using `querySelector()` we'll target each one using the id. _Note_ be sure to add the `#` sign before the id name.

Add this code after the shoppinglist code you created earlier.

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

To track when the form is submitted we'll add an event listener to our form variable we created. Inside the parenthesis the first item is the event we want to listen for. In this case 'submit'. The second item is the name of a function we want to run once the event happens.

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

Add this code to the function. This is a conditional that checks to see if the value in the input field is blank or not. If it is blank then we call an `alert()` with the message we want to convey.

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

```js
// Add new item object to array.
shoppinglist.push(newitem.value);
```

**05 - Clearing the text from the input field once the form is submitted.**

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

Now that we have the function build we should test it to make sure that data from the form is being added to our array. Currently we're not adding the array items to the webpage. We'll build that functionality in a minute.

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

Working on this...

## Adding a Button to Clear the List

Working on this...

## Unfinished Code

I'm still working on finishing up the code and code explanations for this final section. I'll email everyone when it's all completed and uploaded here.

Also this section stating unfinished code will be removed once it's complete :)
