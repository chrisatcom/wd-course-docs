## Creating an HTML file

Inside VS Code right click in the Explorer pane and select 'New File'.

![Screenshot create new file in VS Code](/images/exercises/helloworldbio/08-vs-code-new-file.webp)

Set the file name to 'index.html'.

![Screenshot create new file in VS Code](/images/exercises/helloworldbio/08-5-type-filename.webp)

The 'index.html' file you created should now be active in the editor.

![Screenshot showing created index file](/images/exercises/helloworldbio/09-vs-code-index-file-created.webp)

## Adding our Content

Inside our `index.html` file we're going to add in some short bio content and mark it up with a couple of html elements.

Here's my bio I wrote out in Word. I'm going to use this same content and implied structure for my page.

![Screenshot showing created index file](/images/exercises/helloworldbio/10-word-preview.webp)

### Main Heading / Title

Inside your `index.html` file in VS Code, use the `<h1>...</h1>` element to tell the browser this text is a heading. Type the following:

```html
<h1>Hello World Bio</h1>
```

### Sub Head

Add the subhead for **About Me** below the `<h1>` element. This time we'll use the `<h2>` element.

```html
<h2>About Me</h2>
```

All together your code should look like this in the editor:

```html
<h1>Hello World Bio</h1>

<h2>About Me</h2>
```

### Adding a paragraph (or two).

Now add a short introductory paragraph about yourself. For this we'll use the `<p>` paragraph element.

```html
<p>Hi there, I'm Chris. I'm a full-stack developer and adjunct web design teacher at College of the Mainland.</p>
```

After the introductory paragraph add in a short paragraph about your interests, hobbies, etc.

```html
<p>When I’m not at work I enjoy hanging out with my family, watching horror movies and writing songs in my little studio at home.</p>
```

All together your code should resemble this now in the editor.

```html
<h1>Hello World Bio</h1>

<h2>About Me</h2>

<p>When I’m not at work I enjoy hanging out with my family, watching horror movies and writing songs in my little studio at home.</p>

<p>When I’m not at work I enjoy hanging out with my family, watching horror movies and writing songs in my little studio at home.</p>
```

### Checking your progress

It's always good to periodically check your code to make sure everything is working correctly in a browser. For this go to your project folder and double click the `index.html` file. It should open up in a web browser.

Your webpage should resemble this so far:

![Screenshot preview 1 in browser](/images/exercises/helloworldbio/11-hello-world-preview-1.webp)

### Adding in the last bit of content.

To finish up let's add in another subhead for **Education** using another `h2` element.

```html
<h2>Education</h2>
```

And finally add in a final paragraph using the `<p>` element about your educational journey, such as the degree your seeking, program you're in, etc. Here's what I came up with for myself.

```html
<p>I have received a Bachelor of Fine Arts in Art and Design from the University of Houston - Clear Lake, and an Associate of Applied Science in Graphic/Web Design from College of the Mainland.</p>
```

All together your code should resemble this now in the editor.

```html
<h1>Hello World Bio</h1>

<h2>About Me</h2>

<p>When I’m not at work I enjoy hanging out with my family, watching horror movies and writing songs in my little studio at home.</p>

<p>When I’m not at work I enjoy hanging out with my family, watching horror movies and writing songs in my little studio at home.</p>

<h2>Education</h2>

<p>I have received a Bachelor of Fine Arts in Art and Design from the University of Houston - Clear Lake, and an Associate of Applied Science in Graphic/Web Design from College of the Mainland.</p>
```

### Checking your progress... again.

Refresh your browser and now you should see all the text on the screen.

![Screenshot preview 1 in browser](/images/exercises/helloworldbio/12-hello-world-preview-2.webp)

When we create webpage's and sites all of our content goes into an `html` file like the one we created here. The purpose is to take content for our website and use elements and tags to **mark up** the content so it has meaning.

In this case we used a heading element, subhead element and paragraph elements to describe our content.

## Making it not so hideous

At this point our page isn't going to win any awards. We can use **css** to add some style to our elements to make them look better.
