import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Figure from '../components/Figure';
import Keyboard from '../components/Keyboard';
import Puzzle from '../components/Puzzle';
import Timer from '../components/Timer';
import {fetchPuzzleAction, resetGameAction, sendScoreDataAction, setLostAction, setWinAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const PlayPage = (): ReactElement => {
    const {player} = useSelector((state: StoreState) => state.playerReducer);
    const {puzzle, correctLetters, incorrectLetters, win, lost, time} = useSelector((state: StoreState) => state.gameReducer);
    const {content} = puzzle;
    const dispatch = useDispatch();

    const regex = /[a-z]/gi;
    const uniqueCharCount = new Set(content.replaceAll(' ', '')).size;

    useEffect(() => {
        if (content.match(regex)?.every((char) => correctLetters.includes(char.toLocaleLowerCase()))) {
            dispatch(setWinAction());
            dispatch(
                sendScoreDataAction({
                    quoteId: puzzle._id,
                    length: puzzle.length,
                    uniqueCharacters: uniqueCharCount,
                    userName: player,
                    errors: incorrectLetters.length,
                    duration: time,
                })
            );
        }

        if (incorrectLetters.length === 6) dispatch(setLostAction());
    }, [dispatch, puzzle, correctLetters, incorrectLetters]);

    const handleReset = (): void => {
        dispatch(resetGameAction());
        dispatch(fetchPuzzleAction());
    };

    return (
        <>
            <div className="p-playPage">
                <header>
                    <h1>HANGMAN</h1>
                </header>
                WRONG: {incorrectLetters.length}/6
                {lost && <span>GAME OVER!</span>}
                {win && (
                    <>
                        <span>CONGRATULATIONS!</span> <br /> <button>Show highscore table</button>{' '}
                    </>
                )}
                <Figure />
                <Puzzle />
                <Keyboard />
                <button className="p-playPage__button" onClick={handleReset}>
                    RESET
                </button>
                <Timer />
            </div>
        </>
    );
};

export default PlayPage;
