import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello, World!</h1>
                <nav>
                    <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
                    <Link to="/second" style={{ margin: '0 10px', color: 'white' }}>Second Page</Link>
                </nav>
            </header>
        </div>
    );
}

function SecondPage( {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello, World! 2</h1>
                <nav>
                    <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Back to Home</Link>
                </nav>
            </header>
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/second" element={<SecondPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;