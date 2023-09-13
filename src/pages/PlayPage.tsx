import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Figure from '../components/Figure';
import Keyboard from '../components/Keyboard';
import Puzzle from '../components/Puzzle';
import Timer from '../components/Timer';
import {sendScoreData} from '../service/game';
import {resetGame, setLost, setWin} from '../store/features/gameSlice';
import {RootState, useAppDispatch, useAppSelector} from '../store/store';
import {fetchPuzzle} from '../store/thunks/gameThunks';

const PlayPage: React.FC = () => {
    const {playerName, puzzle, correctLetters, incorrectLetters, isWin, isLost, time} = useAppSelector((state: RootState) => state.game);
    const {content} = puzzle;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const regex = /[a-z]/gi;
    const uniqueCharCount = new Set(content.replaceAll(' ', '')).size;

    useEffect(() => {
        if (content.match(regex)?.every((char) => correctLetters.includes(char.toLocaleLowerCase()))) {
            dispatch(setWin());
        }

        if (incorrectLetters.length === 6) dispatch(setLost());
    }, [dispatch, puzzle, correctLetters, incorrectLetters]);

    const handleReset = (): void => {
        dispatch(resetGame());
        dispatch(fetchPuzzle());
    };

    const handleShowHighscore = (): void => {
        sendScoreData({
            quoteId: puzzle._id,
            length: puzzle.length,
            uniqueCharacters: uniqueCharCount,
            userName: playerName,
            errors: incorrectLetters.length,
            duration: time,
        });
        navigate('/highscores');
    };

    return (
        <div className="p-playPage">
            <header className="p-playPage__header">
                <h1>HANGMAN</h1>
            </header>
            {isLost && <span>GAME OVER!</span>}
            {isWin && (
                <>
                    <span>CONGRATULATIONS!</span>
                    <button className="p-playPage__goToHighscores" onClick={handleShowHighscore}>
                        Show highscore table
                    </button>
                </>
            )}
            <Figure />
            WRONG: {incorrectLetters.length}/6
            <Puzzle />
            <Keyboard />
            <div className="p-playPage__buttons">
                <button className="p-playPage__buttons_backToHome" onClick={() => navigate('/')}>
                    Back to Homepage
                </button>
                <button className="p-playPage__buttons_reset" onClick={handleReset}>
                    Reset
                </button>
            </div>
            <Timer />
        </div>
    );
};

export default PlayPage;
