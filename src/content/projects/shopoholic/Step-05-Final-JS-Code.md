## Challenge Code Answer

Here's how I wrote the code for the clear list button.

At the end of the `app.js` file I added the following.

```js
// Get a reference to the button element.
let clearbtn = document.querySelector("#clearbtn");

// Add an event listener to the button
clearbtn.addEventListener("click", clearList);

// Clear List Function
function clearList() {
  // Empty the shoppinglist array.
  shoppinglist = [];

  // Clear the data on the screen.
  list.innerHTML = "";
}
```
