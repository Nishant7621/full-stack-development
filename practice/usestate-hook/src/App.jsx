/**
 * ==============================================================================
 * App.jsx (Root Parent for useState Demos)
 * ==============================================================================
 */

import Counter from './components/Counter';
import ToggleVisibility from './components/ToggleVisibility';
import TextInput from './components/TextInput';

function App() {
    return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '850px', margin: '0 auto' }}>
            <h1>🎣 The useState Hook in React</h1>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
                <code>useState</code> allows functional components to have and update internal memory (state).<br/>
                Whenever a setter function (e.g. <code>setCount</code>, <code>setIsVisible</code>, <code>setName</code>) is invoked,
                React re-renders that component with the fresh value!
            </p>

            <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #ddd' }} />

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {/* 1. Number state */}
                <Counter />

                {/* 2. Boolean state */}
                <ToggleVisibility />

                {/* 3. String state */}
                <TextInput />
            </div>
        </div>
    );
}

export default App;
