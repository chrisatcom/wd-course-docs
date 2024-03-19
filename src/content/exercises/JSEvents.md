## Steps to Build App

1. Reference various elements on the page to operate on them.

   - Total Balance
   - Income
   - Expense
   - Transaction Form
   - Transaction Description Input
   - Transaction Amount Input
   - Transaction List Output

2. Create a temporary transactions array for testing. The array will contain transaction objects with the following properties:
   - id
   - text
   - amount
3. Add transaction list to page.
4. Add new transaction when form is submitted.
5. Need the ability to generate random id's for each transaction.
6. Delete a transaction.
7. Update transaction list on page when a transaction is added or removed.
8. Calculate the total amount value, and display on page.
9. Calculate the Income and Expense amounts, and display on page.
10. Persist data to local storage on browser.

## DOM Element References

Set references to the DOM elements we will need access to for changing content and adding events. Each element we need has an ID attribute.

We'll use those in conjuction with the `document.getElementById()` method.

```js
// Set references to DOM elements for the app.
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
```

## Create Temp Transaction Array

Create an array to hold some dummy transactions for testing. This will be replaced later when we persist the data to local storage at the very end.

Each array item will be an object containing a unique id, description of the transaction and the transaction amount. Values with a negative sign '-' sign denotes an expense.

```js
// Store dummy transactions for testing.
const dummyTransactions = [
	{ id: 1, text: "Salary", amount: 300 },
	{ id: 2, text: "Book", amount: -20 },
	{ id: 3, text: "Camera", amount: -150 },
];
```

## Capture Data from the Form

### Add a Submit Event Listener

Add an event listenter to the form element to track when the form has been submitted. The `addEventListener()` method takes 2 arguments. The first is the type of event and the second is a callback function. The callback function is the logic we run when the event is called.

```js
// Add a submit event listener on the form element.
form.addEventListener("submit", addTransaction);
```

In this case we are specifying a function `addTransaction()` that we will create. You can also use an annonymous function as the callback. When you call a function as we are doing leave off the parenthesis `'()'` on the end of the function call.

### Create the `addTransaction()` Callback Function

Create the function and pass in the event object (in this case we are using the letter 'e').

```js
// Create a function to handle adding transactions from form submission.
function addTransaction(e) {
	// Need to prevent default behavior of form refreshing the page.
	e.preventDefault();

	// Simple validation on the inputs to make sure they contain data.
	if (text.value.trim() === "" || amount.value.trim() === "") {
		alert("Please add a text and amount");
		return;
	}

	// Create a new object for the transaction.
	// Be sure to add a '+' plus sign before the amount to turn it into a number from a string.
	let transaction = {
		id: 4,
		text: text.value,
		amount: +amount.value,
	};

	// Add / Push the new transaction onto the array.
	transactions.push(transaction);

	// Clear the form inputs.
	text.value = "";
	amount.value = "";
}
```

## Calculate the Totals

For this we want to use the transactions array to caclulate a total amount, an income total and an expense total. Once we have those values we'll add them to the DOM.

### Total Balance

```js
// Function to calculate the total balance and print it on the screen.
function calculateTotal() {
	// Grab the amounts from the transactions array.
	let amounts = transactions.map(function (transaction) {
		return transaction.amount;
	});

	// Set the initial total to 0.
	let total = 0;

	// Loop over the amounts and add them together.
	amounts.forEach(function (item) {
		total = total + item;
	});

	total = total.toFixed(2);

	// Add total to DOM
	balance.innerText = `$${total}`;
}
```

### Total Income Balance

```js
// Calculate the Income
function calculateIncome() {
	// Grab all the amounts from the transactions array.
	let amounts = transactions.map(function (transaction) {
		return transaction.amount;
	});

	// Filter out any values that are less than zero. Add the remaining values together.
	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	// Add the income to the DOM.
	money_plus.innerText = `$${income}`;
}
```

### Total Expense Balance

```js
// Calculate the Expenses
function calculateExpense() {
	// Grab all the amounts from the transactions array.
	let amounts = transactions.map(function (transaction) {
		return transaction.amount;
	});

	// Filter out any values that are more than zero. Add remaining values together.
	const expense = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

	// Add the expense to the DOM.
	money_minus.innerText = `$${expense}`;
}
```

### Update all Values at Once

We'll need to call all three calculateXX functions to run the calculations and display them on the screen. Let's create a function that will do this for us and that we can call each time we want to update the amounts on the screen.

```js
// Update all the Amounts on the Screen
function updateValues() {
	calculateTotal();
	calculateIncome();
	calculateExpense();
}
```

## Add Transaction List to DOM

This function is used to create a new list item 'li' element. Assign it a class and 'sign' based on if the value is less than zero or not, add the inner text and append it to the transaction list on the screen.

```js
/***
 * Add the Transactions to the DOM
 */
function addTransactionDOM(transaction) {
	// Initialize a variable to store the 'sign'.
	let sign;

	// Check amount value to determine proper sign usage.
	if (transaction.amount < 0) {
		sign = "-";
	} else {
		sign = "+";
	}

	// Create a new 'li' element.
	let item = document.createElement("li");

	// Add a class for CSS based on the amount.
	if (transaction.amount < 0) {
		item.classList.add("minus");
	} else {
		item.classList.add("plus");
	}

	// Add the inner HTML and text to the list item.
	item.innerHTML = `${transaction.text} <span>${transaction.amount}</span>`;

	// Append the new list item to the list.
	list.appendChild(item);
}
```

### Show Form Submission on DOM

Now that we have the ability to add a transaction to our list on the screen, we need to update the `addTransaction()` function. This will add the new item to the screen as well as the internal array.

After we'll also need to update the amount values as well.

Within the function right above the '// Clear the form inputs' comment add the following code:

```js
// Add the transaction to the DOM.
addTransactionDOM(transaction);

// Update the Values.
updateValues();
```

## Initializing the Application

Create a function that will start up or 'initialize' the application. This function will clear the list on the screen and refresh it with all the current items in the transactions array. As well as update the amount values on the screen.

```js
/**
 * Initialize the application.
 */
function init() {
	// Remove any items from the list in the DOM.
	list.innerHTML = "";

	// Loop over the transactions and add them to the DOM.
	transactions.forEach(function (item) {
		addTransactionDOM(item);
	});

	// Update the amount values.
	updateValues();
}
```

### Boot the Application

Now that we have the initialize function ready to go we'll need to call it to get the application running. Add this at the very bottom of the code base.

```js
// Boot the application.
init();
```
