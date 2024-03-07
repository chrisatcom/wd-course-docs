## Accessing Elements

### getElementById()

`getElementById()` is used to select and retrieve an HTML element from a web page based on its unique identifier, the "id" attribute. It allows developers to access and manipulate specific elements easily by referencing their unique IDs.

```html
<main>
  <h1 id="title">Working with the DOM</h1>
  <p>...</p>
</main>
```

```js
// Store a reference to the element with an id of title.
let title = document.getElementById("title");
```

### querySelector()

`querySelector()` is used to select and retrieve HTML elements from a web page using CSS selectors. It allows developers to target elements based on various criteria such as class names, IDs, tag names, or attribute values.

```html
<main>
  <h2 class="subtitle">Upcoming Sci-Fi Movies</h2>
  <ul>
    <li>The Batman</li>
    <li>Tron 3</li>
    <li>Battle of the Planets</li>
  </ul>
</main>
```

```js
// Select the subtitle.
let title = document.querySelector(".subtitle");

// Select the UL.
let movieList = docuement.querySelector("ul");
```

### querySelectorAll()

`querySelectorAll()` allows developers to select and retrieve multiple HTML elements from a web page using CSS selectors. It returns all elements that match the specified selector(s). This method provides flexibility in selecting elements based on various criteria such as class names, IDs, tag names, or attribute values. Developers can then iterate through the NodeList to perform actions on each selected element, enabling efficient manipulation or interaction with multiple elements simultaneously.

### getElementsByTagName()

> Selects all elements on a page with a specified tag name.

### getElementsByClassName()

> Selects one or more elements given the value of their class attribute. The HTML must have a class attribute for it to be selectable.
