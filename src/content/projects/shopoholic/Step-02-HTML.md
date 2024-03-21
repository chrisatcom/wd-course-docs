## Boilerplate Code

1. Open `index.html`.
2. Create the boilerplate structure by typing an exclamation point '!' and hitting enter.

Your starting code should resemble this now:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body></body>
</html>
```

## Head Element

1. In the `<head>` element change the `<title>` to 'Shopoholic'.
2. Directly after the title element add a `<link>` element and set the href value to your css file.

Your code should look like this now inside the `<head>` area.

```html
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Shopoholic</title>
	<link rel="stylesheet" href="style.css" />
</head>
```

## Body Element

Add the following code inside the `<body>` element.

We are adding some attribute id's to some of the elements so that we can easily target them in JavaScript.

- An id of `form` to the `<form>` element. We'll need this to know when the form is submitted.
- An id of `item` to the `<input>` element inside the form. We'll need this to read the value the user typed into the form field.
- An id of `list` to the `<ul class="shopping-list">` element. We'll use this to add new `<li>` items to the list dynamically when the form is submitted.

```html
<div id="app">
	<h1>Shop-O-Holic</h1>

	<form id="form">
		<input type="text" id="item" placeholder="New Item" />
		<button>Add</button>
	</form>

	<ul class="shopping-list" id="list">
		<li>Dumplings</li>
	</ul>
</div>
```

## Add Link to app.js

Directly before your closing `</body>` tag. Add a script element with the src attribute pointing to your app.js file.

```html
<script src="app.js"></script>
```

## Completed HTML File

The completed index.html file should now resemble the following code:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style.css" />
		<title>Shopoholic</title>
	</head>
	<body>
		<div id="app">
			<h1>Shop-O-Holic</h1>

			<form id="form">
				<input type="text" id="item" placeholder="New Item" />
				<button>Add</button>
			</form>

			<ul class="shopping-list" id="list">
				<li>Dumplings</li>
			</ul>
		</div>
		<script src="app.js"></script>
	</body>
</html>
```

## Current Progress Screenshot

Your application should now look like the following in the browser. Next we'll add some CSS to make it look a little nicer.

![Screenshot of the brower with HTML finished](/images/projects/shopoholic/ss-02-after-html.png)
