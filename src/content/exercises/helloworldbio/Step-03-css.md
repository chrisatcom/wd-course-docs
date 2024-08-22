## Creating a CSS file.

Inside VS Code create a new file the same way you did for `index.html` but this time name it **style.css**

The **style.css** file should now be active in the editor.

![Screenshot preview 1 in browser](/images/exercises/helloworldbio/13-new-css-file.webp)

## Adding some style rules

Inside `style.css` add the following code.

```css
h1 {
	font-family: sans-serif;
	font-size: 48px;
	color: teal;
}
```

## Linking to the style.css file

In order to see our styles, we need to link to the stylesheet file from our `index.html` file.

Inside the `index.html` file add this code to the very top above the `<h1>` element. I'm including the existing `<h1>` element here for reference, you don't need to type it again.

```html
<link rel="stylesheet" href="style.css" />

<h1>Hello World Bio</h1>
```

### Check on our progress

Refresh your browser again, and if all goes well you should see the heading change. The page should resemble this now:

![Screenshot preview 1 in browser](/images/exercises/helloworldbio/14-css-heading-change.webp)

## Adding more styles

To finish up let's add in styles for the subhead and paragraph elements. Add the following code to `style.css`.

```css
h2 {
	font-family: sans-serif;
	font-size: 28px;
	color: coral;
}

p {
	font-size: 21px;
	line-height: 1.7;
	width: 500px;
}
```

Your completed `style.css` file should resemble this now:

```css
h1 {
	font-family: sans-serif;
	font-size: 48px;
	color: teal;
}

h2 {
	font-family: sans-serif;
	font-size: 28px;
	color: coral;
}

p {
	font-size: 21px;
	line-height: 1.7;
	width: 500px;
}
```

## Final Browser Check

Refresh your browser again and now you should see all the style's applied to your page. It should resemble this:

![Screenshot preview 1 in browser](/images/exercises/helloworldbio/15-final-browser-check.webp)
