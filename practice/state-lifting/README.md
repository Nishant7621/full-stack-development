# 🚀 State Lifting Explained

## The Core Concept
In React, **data cannot flow sideways between siblings**:

```
                 App.jsx (Common Parent)
               /                         \
       passes value & setter         passes value only
             /                             \
            ▼                               ▼
      InputBox.jsx                    DisplayCard.jsx
  (Sibling A: Writer)              (Sibling B: Reader)
```

## Why State is Lifted Up:
1. `InputBox.jsx` and `DisplayCard.jsx` are siblings and cannot communicate directly.
2. We declare `const [sharedText, setSharedText] = useState("")` inside `App.jsx`.
3. `InputBox` calls `setSharedText(...)` via its prop when the user types.
4. `App.jsx` re-renders and passes the updated `sharedText` down to `DisplayCard`.
