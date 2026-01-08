// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


function setupDOM() {
  const button = document.getElementById("click-btn");
  const output = document.getElementById("output");
  const form = document.getElementById("name-form");
  const input = document.getElementById("name-input");
  const list = document.getElementById("list");

  if (button) {
    button.addEventListener("click", () => {
      output.textContent = "Button Clicked!";
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input.value) return;

      const li = document.createElement("li");
      li.textContent = input.value;
      list.appendChild(li);
      input.value = "";
    });
  }
}

module.exports = { setupDOM };

