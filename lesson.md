
# 🎨 Lesson: Flexbox Layout with Cards

---
✨ Quick Analogy:
Think of Flexbox like a group photo.

* `justify-content` is how people spread left-to-right.
* `align-items` is whether they’re standing tall or crouching.
* `flex-wrap` is whether you make another row if too many people show up!



---

## 🧩 Flexbox Basics 
### 1. Normal Block Layout (no Flexbox)

By default, `div`s stack vertically:

```
[ Card 1 ]
[ Card 2 ]
[ Card 3 ]
[ Card 4 ]
```

---

### 2. Flexbox Row Layout

With `display: flex;`, the cards sit side by side:

```
[ Card 1 ] [ Card 2 ] [ Card 3 ] [ Card 4 ]
```

---

### 3. Wrapping (flex-wrap: wrap)

If the screen is too narrow, cards move to the next row:

```
[ Card 1 ] [ Card 2 ]
[ Card 3 ] [ Card 4 ]
```

---

## 🔄 Changing `.card` Width

### Current Setting → `width: 22%`

4 cards fit in a row:

```
[ Card 1 ] [ Card 2 ] [ Card 3 ] [ Card 4 ]
```

---

### If You Change to `width: 30%`

Now only 3 cards fit per row:

```
[ Card 1 ] [ Card 2 ] [ Card 3 ]
[ Card 4 ]
```

---

### If You Change to `width: 45%`

Now only 2 cards fit per row:

```
[ Card 1 ] [ Card 2 ]
[ Card 3 ] [ Card 4 ]
```

---

### If You Change to `width: 100%`

Each card takes a full row (like a list):

```
[ Card 1 ]
[ Card 2 ]
[ Card 3 ]
[ Card 4 ]
```

---





## 🏗️ The HTML Structure

In your `index.html` file, the main part is:

```html
<div class="container">
  <div class="card">
    <h2 class="card-header">Cool Card</h2>
    <img class="card-img" src="img/candy2.jpg" alt="candy" />
    <h3 class="card-price">$3.99</h3>
  </div>
  <!-- More cards... -->
</div>
```

* **`<div class="container">`**
  This is like a big box that holds all the smaller boxes (the cards).

* **`<div class="card">`**
  Each card is one product. It has:

  * A title (`h2.card-header`)
  * A picture (`img.card-img`)
  * A price (`h3.card-price`)

👉 This structure makes it easy to repeat cards without writing new layout code.

---

## 🎨 The CSS Styles

### 1. Reset and Setup

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}
```

This makes sure every element behaves consistently across browsers.

---

### 2. Flexbox Basics 🧩

When you add this to a parent element:

```css
display: flex;
```

…it changes how the children are arranged:

* By default, children line up **in a row** (instead of stacking top-to-bottom).
* You can control spacing, alignment, and wrapping with a few special properties.

The most common Flexbox tools are:

* **`justify-content`** → controls left-to-right spacing
* **`align-items`** → controls up-and-down alignment
* **`flex-wrap`** → decides if items move to the next line when they don’t fit

---

### 3. The Container

```css
.container {
  width: 90vw;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

* **`display: flex;`** → turns it into a flexbox.
* **`flex-wrap: wrap;`** → lets cards move to the next line if needed.
* **`justify-content: space-between;`** → spreads out the cards evenly across each row.

---

### 4. The Cards

```css
.card {
  width: 22%;
  height: 40rem;
  margin: 3rem 0;
  border: 2px solid black;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
```

Inside each card:

* **`width: 22%`** → each card is about 1/4 of the container width (so 4 fit per row).
* **`border-radius: 10px;`** → soft rounded corners.
* **`display: flex; flex-direction: column;`** → inside the card, elements are stacked vertically.
* **`align-items: center;`** → centers content horizontally.
* **`justify-content: space-around;`** → spreads content vertically.

---

## 🧩 Block Element Modifier (BEM)

The class names follow **BEM style**:

* **Block:** `card` = the main component
* **Element:** `card-header`, `card-img`, `card-price` = parts of the block

This naming system keeps CSS organized and easier to read.

---

## 🔄 What Happens if You Change `.card` Width?

Right now:

```css
.card { width: 22%; }
```

* Fits **4 cards per row**.

If you change it to:

* **`45%`** → only 2 cards fit per row.
* **`30%`** → 3 cards fit per row.
* **`100%`** → each card takes the whole row (like a stacked list).

👉 Flexbox automatically rearranges the layout depending on space.

---
