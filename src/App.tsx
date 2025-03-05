import React from 'react';
import './App.css';
import Board from './components/Board';
// import { example } from './boards/exampleSolvedFully';
// import { example } from './boards/exampleSolvedPartially';
import { example } from './boards/exampleErrorAll';
// import { example } from './boards/exampleErrorRow';
// import { example } from './boards/exampleErrorCol';
// import { example } from './boards/exampleErrorBox';

function App() {
    return (
        <div className="App">
            <Board board={example} />
        </div>
    );
}

export default App;
