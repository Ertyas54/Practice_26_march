import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Home Page</h1>
                <nav>
                    <Link to="/second" style={{ color: 'white', fontSize: '20px' }}>
                        Go to Second Page
                    </Link>
                </nav>
            </header>
        </div>
    );
}

function SecondPage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Second Page</h1>
                <nav>
                    <Link to="/" style={{ color: 'white', fontSize: '20px' }}>
                        Back to Home
                    </Link>
                </nav>
                <p>Try to refresh this page!</p>
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