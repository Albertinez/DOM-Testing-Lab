/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");
const { setupDOM } = require("../src/index");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("DOM User Behavior Tests", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
    setupDOM();
  });

  test("button click updates DOM text", () => {
    const button = document.getElementById("click-btn");
    const output = document.getElementById("output");
    button.click();
    expect(output.textContent).toBe("Button Clicked!");
  });

  test("form submission adds item to list", () => {
    const input = document.getElementById("name-input");
    const form = document.getElementById("name-form");
    const list = document.getElementById("list");
    input.value = "Albertinez";
    form.dispatchEvent(new Event("submit"));
    expect(list.children.length).toBe(1);
    expect(list.children[0].textContent).toBe("Albertinez");
  });

  test("empty input does not add list item", () => {
    const form = document.getElementById("name-form");
    const list = document.getElementById("list");
    form.dispatchEvent(new Event("submit"));
    expect(list.children.length).toBe(0);
  });
});
