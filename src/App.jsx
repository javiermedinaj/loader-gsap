import React from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';

const App = () => {
    return (
        <div>
            <Loader />
            <main className="app">
                <Hero />
            </main>
        </div>
    );
};

export default App;