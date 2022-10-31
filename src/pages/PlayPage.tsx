import React, {ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Keyboard from '../components/Keyboard';
import Puzzle from '../components/Puzzle';
import {fetchPuzzleAction, resetGameAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const PlayPage = (): ReactElement => {
    const {incorrectLetters} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    const handleReset = (): void => {
        dispatch(resetGameAction());
        dispatch(fetchPuzzleAction());
    };

    return (
        <div className="p-playPage">
            <header>
                <h1>HANGMAN</h1> <p> </p>
            </header>
            WRONG: {incorrectLetters.length}/6
            <Puzzle />
            <Keyboard />
            <button className="p-playPage__button" onClick={handleReset}>
                RESET
            </button>
        </div>
    );
};

export default PlayPage;
