# 📦 Props Data Flow Explained

## The 3 Key Connected Files:
1. **`main.jsx`**: Entry point that connects React to HTML DOM (`index.html`) and renders `App.jsx`.
2. **`App.jsx`**: The parent component that holds the data and passes it down via attributes (props).
3. **`components/Student.jsx`**: The child component that receives the props and renders the UI.

---

## 🔄 How the Flow Works:
```
main.jsx (Mounts App)
   │
   ▼
App.jsx (Parent)
   │
   │ passes: name="Nishant", rollNo={101}, onAlert={handleStudentAlert}
   ▼
Student.jsx (Child)
   │
   ├── Reads: { name, rollNo, course }
   └── User clicks button ➔ Calls onAlert(name) ➔ Fires handleStudentAlert in App.jsx!
```
