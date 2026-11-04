/**
 * ==============================================================================
 * STEP 3: CHILD COMPONENT (Student.jsx)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. This component is called by App.jsx:
 *      <Student name="Nishant" rollNo={101} course="Full Stack" onAlert={handleStudentAlert} />
 * 
 * 2. It RECEIVES data through its parameter called "props".
 *    Here we use object destructuring { name, rollNo, course, onAlert }
 *    which is a cleaner alternative to writing props.name, props.rollNo, etc.
 * 
 * 3. PROPS ARE READ-ONLY (IMMUTABLE):
 *    Student.jsx CANNOT change 'name' or 'rollNo'. It can only display them.
 * 
 * 4. CALLING PARENT FUNCTION VIA PROPS:
 *    When the user clicks the button:
 *    onClick={() => onAlert(name)}
 *    It triggers the 'handleStudentAlert' function that lives up in App.jsx!
 *    This is how a child sends information back UP to a parent.
 */

function Student({ name, rollNo, course, onAlert }) {
    return (
        <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '16px',
            margin: '12px 0',
            maxWidth: '320px',
            backgroundColor: '#f8f9fa',
            fontFamily: 'sans-serif'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#007bff' }}>Student Profile</h3>
            
            {/* Displaying values passed from App.jsx */}
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Roll No:</strong> {rollNo}</p>
            <p><strong>Course:</strong> {course}</p>

            {/* When clicked, runs the callback function received from App.jsx */}
            <button 
                onClick={() => onAlert(name)}
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '8px'
                }}
            >
                Greet {name}
            </button>
        </div>
    );
}

export default Student;
