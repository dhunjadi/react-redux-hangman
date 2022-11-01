import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Figure from '../components/Figure';
import Keyboard from '../components/Keyboard';
import Puzzle from '../components/Puzzle';
import Timer from '../components/Timer';
import {sendScoreData} from '../service/game';
import {fetchPuzzleAction, resetGameAction, setLostAction, setWinAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const PlayPage = (): ReactElement => {
    const {player} = useSelector((state: StoreState) => state.playerReducer);
    const {puzzle, correctLetters, incorrectLetters, win, lost, time} = useSelector((state: StoreState) => state.gameReducer);
    const {content} = puzzle;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const regex = /[a-z]/gi;
    const uniqueCharCount = new Set(content.replaceAll(' ', '')).size;

    useEffect(() => {
        if (content.match(regex)?.every((char) => correctLetters.includes(char.toLocaleLowerCase()))) {
            dispatch(setWinAction());
        }

        if (incorrectLetters.length === 6) dispatch(setLostAction());
    }, [dispatch, puzzle, correctLetters, incorrectLetters]);

    const handleReset = (): void => {
        dispatch(resetGameAction());
        dispatch(fetchPuzzleAction());
    };

    const handleShowHighscore = (): void => {
        sendScoreData({
            quoteId: puzzle._id,
            length: puzzle.length,
            uniqueCharacters: uniqueCharCount,
            userName: player,
            errors: incorrectLetters.length,
            duration: time,
        });
        navigate('/highscores');
    };

    return (
        <div className="p-playPage">
            <div className="p-playPage__content">
                <header className="p-playPage__content_header">
                    <span onClick={() => navigate('/')}>&larr;</span> <h1>HANGMAN</h1> <span>&#160;</span>
                </header>
                {lost && <span>GAME OVER!</span>}
                {win && (
                    <>
                        <span>CONGRATULATIONS!</span>
                        <button className="button" onClick={handleShowHighscore}>
                            Show highscore table
                        </button>
                    </>
                )}
                <Figure />
                WRONG: {incorrectLetters.length}/6
                <Puzzle />
                <Keyboard />
                <button className="button" onClick={handleReset}>
                    RESET
                </button>
                <Timer />
            </div>
        </div>
    );
};

export default PlayPage;
