import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorldWrapper from './components/HelloWorldWrapper';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <HelloWorld/>
                <HelloWorldWrapper/>
            </header>
        </div>
    );
}

export default App;
