# HTML-CSS

## Task 8

# Accordion Component

This project implements a responsive and interactive accordion component using HTML, CSS, and JavaScript. Below is an explanation of the functionality provided by the JavaScript and CSS files.

---

## JavaScript (`main.js`)

The JavaScript file handles the interactive behavior of the accordion:

1. **Accordion Header Click Event**:
   - Adds a `click` event listener to all elements with the class `.accordion-item-header`.
   - When a header is clicked, it toggles the `active` class on the clicked header.

2. **Single Active Section**:
   - Ensures only one accordion section is expanded at a time.
   - If another section is already active, it collapses that section by removing the `active` class and setting its `max-height` to `0`.

3. **Smooth Expansion/Collapse**:
   - Expands the clicked section by setting its `max-height` to the scroll height of the content.
   - Collapses the section by resetting `max-height` to `0`.

---

## CSS (`main.css`)

The CSS file provides the styling and animations for the accordion:

1. **Global Styles**:
   - Sets the font to "Poppins" and applies a dark background color (`#34495e`) with white text for the body.

2. **Accordion Container**:
   - Centers the accordion on the page and limits its width to 1000px.

3. **Accordion Items**:
   - Styles each accordion item with a white background, black text, rounded corners, and a subtle shadow for a clean, modern look.

4. **Accordion Headers**:
   - Makes the headers clickable with a pointer cursor.
   - Adds a "+" icon (`\002B`) to the right of each header using the `::after` pseudo-element.
   - Changes the icon to a "-" (`\2212`) when the header is active.

5. **Accordion Body**:
   - Initially hides the content by setting `max-height: 0` and `overflow: hidden`.
   - Expands the content with a smooth transition effect (`max-height 0.2s ease-out`) when the header is active.

6. **Responsive Design**:
   - Adjusts the font size for smaller screens (max-width: 767px) to ensure readability on mobile devices.

---

This project demonstrates how to combine HTML, CSS, and JavaScript to create a visually appealing and functional accordion component.