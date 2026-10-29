# Assignment: Implement Logout Functionality

## 📋 Problem Statement (From Assignment Task)
- Checkout the `react-examples` repository locally on your laptop/machine.
- Implement the logout functionality.

### 💡 Hints & Implementation Details:
1. **Make use of `useDispatch` to logout**:
   - Redux store has `authReducer` which listens for the action `{ type: 'LOGOUT' }` and resets the `user` state to `null`.
   - Dispatch this action using `dispatch({ type: 'LOGOUT' })`.

2. **Add link to Logout in the Header**:
   - In `src/components/Header.jsx`, conditionally render `<Link to="/logout">Logout</Link>` when `user` is authenticated.
   - When not authenticated, display `Login` link and `'Guest'`.

3. **Create `Logout` component which should make use of `useDispatch`**:
   - Created in `src/components/Logout.jsx`.
   - Dispatches `{ type: 'LOGOUT' }` on mount via `useEffect(..., [dispatch])`.
   - Provides clear feedback to the user and options to log in again or navigate home.

---

## 🚀 How to Run the Assignment

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Test the flow:
   - Go to `http://localhost:5173/practice-5` (Login).
   - Enter email `test@test.com` and password `test`, then click **Submit**.
   - You will be redirected to the `/dashboard`, and the Header will show **"👤 John"** with a red **"Logout"** link.
   - Click **Logout** in the Header or on the Dashboard page.
   - The state is cleared via Redux `LOGOUT` action and you are logged out.
