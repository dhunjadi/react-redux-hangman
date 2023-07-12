import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HighscoresPage from './pages/HighscoresPage';
import NamePage from './pages/NamePage';
import PlayPage from './pages/PlayPage';
import './styles/styles.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<NamePage />} />
                    <Route path="/play" element={<PlayPage />} />
                    <Route path="/highscores" element={<HighscoresPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
