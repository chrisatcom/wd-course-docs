## Adding Basic CSS Styling

1. Open the `style.css` file in your editor.

To save on time I'm going to dump all the css you'll need at this point for the application below. Most, if not all, of the CSS below should be very familiar to you now.

The only part that may be a little strange is the html and body styles. Ultimately I want the app to be placed in the center of the page. To do this I'm setting the html and body to be a height of 100%. And adding a display of grid to the body.

```css
html {
	font-family: system-ui, sans-serif;
	color: #444;
	background-color: darkslateblue;
}

html,
body {
	height: 100%;
}

body {
	margin: 0;
	min-height: 100vh;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
}

* {
	box-sizing: border-box;
}

img {
	max-width: 100%;
}

h1 {
	font-size: 1.5rem;
	font-weight: normal;
	text-align: center;
	margin-bottom: 1em;
}

#app {
	max-width: 320px;
	min-height: 480px;
	background: white;
	border-radius: 1rem;
	padding: 1rem;
}

@media screen and (min-width: 400px) {
	#app {
		width: 320px;
	}
}

#form {
	display: flex;
	gap: 8px;
}

#form input {
	width: 100%;
	padding: 8px;
}

#form button {
	padding: 8px;
}

.shopping-list {
	margin: 0;
	padding: 0;
	list-style: none;
	margin-top: 1em;
}

.shopping-list li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgb(184, 224, 105);
	border-bottom: 2px solid white;
	padding: 1rem;
}
```

## Current Progress Screenshot

Your application should now look like the following in the browser once all the CSS is added.

![Screenshot of the brower with CSS finished](/images/projects/shopoholic/ss-03-css.png)
