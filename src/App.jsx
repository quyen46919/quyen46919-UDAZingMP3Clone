import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/home';

function App() {
    return (
        <div className="App">
            <Home>
                <Footer/>

            </Home>
        </div>
    );
}

export default App;
