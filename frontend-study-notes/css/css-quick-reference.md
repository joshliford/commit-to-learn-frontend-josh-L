# CSS Styling Quick Reference Guide

## The Box Model
Every HTML element is a rectangular box with these layers (from inside out):

### Content
The actual content of the element (text, images, etc.)

### Padding
Space between the content and the border. Creates internal spacing inside the element. Background color extends into padding.
```css
padding: 20px; /* all sides */
padding: 10px 20px; /* vertical | horizontal */
padding: 10px 20px 15px 25px; /* top | right | bottom | left */
```

### Border
A line that wraps around the padding and content. Can have width, style, and color.
```css
border: 2px solid black; /* width | style | color */
border-radius: 8px; /* rounds corners */
```

### Margin
Space outside the border. Creates distance between elements. Margins are transparent and push other elements away.
```css
margin: 20px; /* all sides */
margin: 0 auto; /* centers block element horizontally */
```

**Key Difference**: Padding adds space *inside* the element (increases element size), margin adds space *outside* (doesn't affect element size, affects positioning).

---

## Display Property
Controls how an element behaves in the layout flow.

### `display: block`
Takes up full width available, starts on new line (div, p, h1-h6, section).

### `display: inline`
Only takes up as much width as needed, flows with text (span, a, strong, em). Cannot set width/height.

### `display: inline-block`
Flows inline but can have width/height set. Useful for buttons and navigation items.

### `display: flex`
Creates a flexible container for laying out children. Extremely powerful for modern layouts.

### `display: grid`
Creates a grid container for two-dimensional layouts with rows and columns.

### `display: none`
Hides element completely (removes from layout flow).

---

## Flexbox
A one-dimensional layout system for arranging items in rows or columns.

### Container Properties (on parent)
```css
display: flex;
flex-direction: row; /* row | column | row-reverse | column-reverse */
justify-content: center; /* main axis: flex-start | center | flex-end | space-between | space-around */
align-items: center; /* cross axis: flex-start | center | flex-end | stretch */
flex-wrap: wrap; /* allows items to wrap to new line */
gap: 20px; /* space between flex items */
```

### Item Properties (on children)
```css
flex: 1; /* shorthand for flex-grow, flex-shrink, flex-basis */
flex-grow: 1; /* how much item should grow to fill space */
flex-shrink: 1; /* how much item should shrink if needed */
order: 2; /* changes visual order of items */
```

---

## Grid
A two-dimensional layout system for creating complex layouts with rows and columns.

```css
display: grid;
grid-template-columns: 200px 1fr 1fr; /* 3 columns: fixed, flexible, flexible */
grid-template-rows: auto 1fr auto; /* header, content, footer */
gap: 20px; /* space between grid items */
grid-column: 1 / 3; /* item spans from column 1 to 3 */
grid-row: 1 / 2; /* item spans row 1 */
```

**fr unit**: Flexible unit that represents a fraction of available space.

---

## Positioning
Controls where an element appears on the page.

### `position: static` (default)
Normal document flow. Top, right, bottom, left have no effect.

### `position: relative`
Positioned relative to its normal position. Can use top, right, bottom, left to offset. Creates positioning context for absolute children.

### `position: absolute`
Removed from document flow. Positioned relative to nearest positioned ancestor (or viewport if none). Other elements ignore its space.

### `position: fixed`
Removed from flow. Positioned relative to viewport. Stays in place when scrolling.

### `position: sticky`
Hybrid of relative and fixed. Acts relative until scrolling past a threshold, then becomes fixed.

```css
position: absolute;
top: 20px;
right: 10px;
z-index: 10; /* stacking order, higher is on top */
```

---

## Common Styling Properties

### Typography
```css
font-family: Arial, sans-serif; /* font stack */
font-size: 16px; /* text size */
font-weight: bold; /* normal | bold | 100-900 */
line-height: 1.5; /* spacing between lines */
text-align: center; /* left | center | right | justify */
text-decoration: underline; /* none | underline | line-through */
text-transform: uppercase; /* uppercase | lowercase | capitalize */
letter-spacing: 2px; /* space between letters */
```

### Lists
```css
list-style-type: disc; /* disc | circle | square | none | decimal | lower-alpha | upper-roman */
list-style-position: inside; /* inside | outside (default) */
list-style-image: url('arrow.png'); /* custom bullet image */
list-style: square inside; /* shorthand: type | position */

/* Common: Remove default list styling */
ul {
  list-style: none; /* removes bullets */
  padding-left: 0; /* removes default indent */
  margin: 0; /* removes default margin */
}
```

**List behavior**: By default, `<ul>` and `<ol>` have left padding (not margin) that creates the indent. List items (`<li>`) are `display: list-item` by default, which shows the bullet/number.

### Colors & Backgrounds
```css
color: #333; /* text color */
background-color: #f0f0f0;
background-image: url('image.jpg');
background-size: cover; /* cover | contain | auto */
background-position: center;
opacity: 0.8; /* 0 (transparent) to 1 (opaque) */
```

### Sizing
```css
width: 300px; /* fixed width */
max-width: 100%; /* won't exceed this */
min-width: 200px; /* won't shrink below this */
height: 400px;
box-sizing: border-box; /* includes padding/border in width/height */
```

**box-sizing tip**: Use `box-sizing: border-box` to make sizing more intuitive (width includes padding and border).

### Visual Effects
```css
box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* x | y | blur | color */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
border-radius: 8px; /* rounded corners */
overflow: hidden; /* hidden | scroll | auto | visible */
cursor: pointer; /* changes mouse cursor */
```

---

## Responsive Design

### Media Queries
Apply styles based on screen size or device features.
```css
/* Mobile first approach */
.container {
  width: 100%;
}

/* Tablets and up */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```

### Viewport Units
```css
width: 100vw; /* 100% of viewport width */
height: 100vh; /* 100% of viewport height */
font-size: 5vw; /* scales with viewport */
```

---

## Pseudo-classes & Pseudo-elements

### Pseudo-classes (element states)
```css
a:hover { color: blue; } /* mouse over */
a:active { color: red; } /* being clicked */
a:visited { color: purple; } /* already visited */
input:focus { outline: 2px solid blue; } /* has keyboard focus */
li:first-child { font-weight: bold; } /* first in parent */
li:last-child { margin-bottom: 0; } /* last in parent */
div:nth-child(2) { color: red; } /* 2nd child */
```

### Pseudo-elements (style part of element)
```css
p::before { content: "→ "; } /* insert before content */
p::after { content: "←"; } /* insert after content */
p::first-letter { font-size: 2em; } /* first letter */
p::first-line { font-weight: bold; } /* first line */
```

---

## Quick Tips

1. **Start with box-sizing**: Add `* { box-sizing: border-box; }` to make sizing more predictable
2. **Use Flexbox for one-dimensional layouts**: Navigation bars, centering items, equal-height columns
3. **Use Grid for two-dimensional layouts**: Page layouts, card grids, complex structures
4. **Use rem for font sizes**: More accessible and easier to scale (1rem = root font size, usually 16px)
5. **Margin collapse**: Vertical margins between elements collapse to the larger of the two
6. **Inspect with DevTools**: Browser developer tools let you test CSS changes in real-time