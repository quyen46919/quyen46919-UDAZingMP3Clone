import { useState } from 'react';
import './App.css';
import Partner from './components/Partner';
import Home from './pages/home';

function App() {
    return (
        <div className="App">
            <Home />
            <Partner />
        </div>
    );
}

export default App;
