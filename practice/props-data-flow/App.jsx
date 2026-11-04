/**
 * ==============================================================================
 * STEP 2: PARENT COMPONENT (App.jsx)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. App.jsx is the parent component loaded by main.jsx.
 * 2. It holds the source data (name, rollNo, course) and handler functions.
 * 
 * 3. PASSING PROPS DOWN:
 *    We import Student from './components/Student'.
 *    We pass data down to Student just like HTML attributes:
 *      <Student name="Nishant" rollNo={101} course="Full Stack Development" onAlert={handleStudentAlert} />
 * 
 * 4. PASSING A FUNCTION AS A PROP:
 *    Notice 'onAlert={handleStudentAlert}'.
 *    We pass the function reference down. We do NOT put () after it,
 *    so it doesn't run right away — it only runs when clicked inside Student.jsx!
 */

import Student from './components/Student';

function App() {
    // Handler function defined in the parent
    const handleStudentAlert = (studentName) => {
        alert(`Hello from Parent (App.jsx)! Student clicked: ${studentName}`);
    };

    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
            <h1>Props Data Flow Demo</h1>
            <p>
                <strong>Flow Direction:</strong> main.jsx ➔ App.jsx (Parent) ➔ Student.jsx (Child)
            </p>

            {/* Instance 1: Passing Nishant's data */}
            <Student 
                name="Nishant" 
                rollNo={101} 
                course="Full Stack Development" 
                onAlert={handleStudentAlert}
            />

            {/* Instance 2: Reusing the same component with different data */}
            <Student 
                name="Aman" 
                rollNo={102} 
                course="React & Node.js" 
                onAlert={handleStudentAlert}
            />
        </div>
    );
}

export default App;
