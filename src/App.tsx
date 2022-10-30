import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NamePage from './pages/NamePage';
import PlayPage from './pages/PlayPage';
import './styles/styles.css';

const App = (): ReactElement => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<NamePage />} />
                    <Route path="/play" element={<PlayPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
