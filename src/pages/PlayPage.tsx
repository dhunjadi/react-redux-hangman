import React, {ReactElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Keyboard from '../components/Keyboard';
import Puzzle from '../components/Puzzle';
import {fetchPuzzleAction, resetGameAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const PlayPage = (): ReactElement => {
    const {puzzle, correctLetters, incorrectLetters} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    const [gameOver, setGameOver] = useState<boolean>(false);
    const regex = /[a-z]/gi;

    useEffect(() => {
        if (incorrectLetters.length === 6) setGameOver(true);
        if (puzzle.match(regex)?.every((char) => correctLetters.includes(char.toLocaleLowerCase()))) setGameOver(true);
    });

    const handleReset = (): void => {
        setGameOver(false);
        dispatch(resetGameAction());
        dispatch(fetchPuzzleAction());
    };

    return (
        <>
            <div className="p-playPage">
                <header>
                    <h1>HANGMAN</h1> <p> </p>
                </header>
                WRONG: {incorrectLetters.length}/6
                <Puzzle />
                <Keyboard gameOver={gameOver} />
                <button className="p-playPage__button" onClick={handleReset}>
                    RESET
                </button>
            </div>
        </>
    );
};

export default PlayPage;
