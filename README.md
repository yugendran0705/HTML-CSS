# HTML-CSS

## Task 10

## JavaScript Functionality Overview

The provided JavaScript code implements a simple page navigation system using hash-based routing and animations.

### Key Features

1. **Page Navigation (`navigateTo` function)**:
   - Handles navigation between different pages identified by their `id`.
   - Prevents unnecessary actions if the user is already on the target page.
   - Animates the transition between pages:
     - The current page slides out (`slide-out` class) and is hidden after 500ms.
     - The target page is displayed and slides in (`active` class).

2. **Hash-Based Routing**:
   - Listens for changes in the URL hash (`window.addEventListener('hashchange')`).
   - Extracts the page ID from the hash and navigates to the corresponding page.

3. **Initial Page Load**:
   - On page load (`DOMContentLoaded` event), checks the current hash in the URL.
   - If no hash is present, defaults to the `home` page.
   - Navigates to the appropriate page based on the hash.

### How It Works

- **Classes Used**:
  - `active`: Marks the currently visible page.
  - `slide-out`: Adds a sliding-out animation to the current page before hiding it.

- **Dynamic Styling**:
  - The `display` property is toggled between `block` and `none` to show or hide pages.
  - Animations are achieved using CSS transitions (e.g., opacity and transform).

## CSS Styling Overview

The provided CSS file styles a single-page application (SPA) with a navigation menu and animated page transitions.

### Key Features

1. **Global Styles**:
   - Applies `box-sizing: border-box` to all elements for consistent sizing.
   - Resets margins and paddings to `0`.
   - Sets a clean, minimal font (`Arial, sans-serif`) and a light gray background (`#f4f4f4`) for the body.

2. **Layout**:
   - **Container**:
     - Uses a flexbox layout to structure the navigation (`.nav`) and content (`.content`) side by side.
     - Ensures the container spans the full height of the viewport (`min-height: 100vh`).
   - **Navigation (`.nav`)**:
     - Fixed width of `250px` with a dark background (`#2c3e50`) and white text.
     - Displays navigation links in a vertical column using `flex-direction: column`.
     - Centers the links vertically with `justify-content: center`.
   - **Content (`.content`)**:
     - Fills the remaining space (`flex: 1`) and centers its content both horizontally and vertically using `justify-content: center` and `align-items: center`.

3. **Navigation Links**:
   - Styled as block elements with padding and a hover effect:
     - Changes the background color to a lighter shade (`#34495e`) on hover.
     - Smooth transition effect (`transition: background 0.3s`) for hover state.

4. **Page Transitions**:
   - **Page (`.page`)**:
     - Initially hidden (`display: none`, `opacity: 0`, `transform: translateX(100%)`).
     - Styled with a white background, padding, and a subtle shadow for a card-like appearance.
     - Animations:
       - When active (`.page.active`), the page becomes visible (`display: block`, `opacity: 1`) and slides into view (`transform: translateX(0)`).
       - When sliding out (`.page.slide-out`), the page fades out (`opacity: 0`) and slides to the left (`transform: translateX(-100%)`).
       - Smooth transitions are applied to opacity and transform properties (`transition: opacity 0.5s ease, transform 0.5s ease`).

5. **Responsive Design**:
   - For screens smaller than `768px`:
     - The container switches to a column layout (`flex-direction: column`).
     - The navigation bar becomes horizontal (`flex-direction: row`) and spans the full width of the screen.
     - Navigation links are centered and adjusted for smaller padding.