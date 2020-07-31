import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import { USER_DATA } from './utils/TestData';

function App() {
    return (
        <div className="app__background">
            {USER_DATA.map(data => (
                <Card key={data.id} userData={data} />
            ))}
        </div>
    );
}

export default App;
