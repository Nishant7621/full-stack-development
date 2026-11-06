# ⚡ Conditional Rendering in React

## 1. What is Conditional Rendering?
Showing or hiding different UI components based on whether a condition or state is `true` or `false`.

---

## 2. The 3 Essential Patterns Demonstrated

### Technique 1: Ternary Operator (`condition ? <A /> : <B />`)
Used when you have a choice between **two** components (e.g., logged-in vs logged-out view).

```jsx
{isLoggedIn ? (
    <LoggedInView userName={userName} onLogout={() => setIsLoggedIn(false)} />
) : (
    <LoggedOutView onLogin={() => setIsLoggedIn(true)} />
)}
```

### Technique 2: Logical AND (`condition && <Component />`)
Used when you want to show a component **only if true**, otherwise show nothing.

```jsx
{isLoggedIn && (
    <VipDashboard />
)}
```

### Technique 3: Early Return Guard
Used to guard an entire screen or page.
```jsx
if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
}
return <DashboardPage />;
```

---

## 🚀 How to Run this Standalone App:
```bash
cd conditional-rendering
npm run dev
# Open http://localhost:5177/
```
