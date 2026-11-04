# 🎣 The useState Hook in React

## 1. Core Definition
`useState` is a built-in React Hook that gives functional components **state** (the ability to remember data that changes over time).

```jsx
const [stateVariable, setterFunction] = useState(initialValue);
```

- **`initialValue`**: The starting value (e.g. `0`, `""`, `false`, `[]`, `{}`).
- **`stateVariable`**: The variable holding the current state.
- **`setterFunction`**: The function used to update the state (e.g. `setCount(5)`).

---

## 2. Golden Rule: Why can't we do `count = count + 1`?
In standard JavaScript:
```javascript
let count = 0;
count = count + 1; // Modifies the variable, but the browser NEVER updates the UI!
```
In React, when you call:
```javascript
setCount(count + 1);
```
React does two things:
1. Updates the value in memory.
2. **Triggers a component re-render** so the DOM displays the fresh value on screen!

---

## 3. Included Examples in this Folder

1. **`Counter.jsx` (Numbers)**:
   - Increasing, decreasing, and resetting counter state.
2. **`ToggleVisibility.jsx` (Booleans)**:
   - Toggling conditional elements using `setIsVisible(!isVisible)`.
3. **`TextInput.jsx` (Strings & Forms)**:
   - Controlled input binding: `value={name}` with `onChange={(e) => setName(e.target.value)}`.

---

## 🚀 How to Run:
```bash
cd usestate-hook
npm run dev
# Open http://localhost:5176/
```
