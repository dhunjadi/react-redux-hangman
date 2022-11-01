import axios from 'axios';
import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
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

    const handleShowHighscore = () => {
        /* dispatch(
            sendScoreDataAction({
                quoteId: puzzle._id,
                length: puzzle.length,
                uniqueCharacters: uniqueCharCount,
                userName: player,
                errors: incorrectLetters.length,
                duration: time,
            })
        ); */
        axios
            .post(
                'https://my-json-server.typicode.com/Serapion-ZG/hangman-ts/highscores',
                {
                    quoteId: puzzle._id,
                    length: puzzle.length,
                    uniqueCharacters: uniqueCharCount,
                    userName: player,
                    errors: incorrectLetters.length,
                    duration: time,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        navigate('/highscores');
    };

    console.log(puzzle.content);

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
                        <span>CONGRATULATIONS!</span> <br /> <button onClick={handleShowHighscore}>Show highscore table</button>
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
