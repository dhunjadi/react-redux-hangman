import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Keyboard from '../components/Keyboard';
import {fetchPuzzleAction, resetGameAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const PlayPage = (): ReactElement => {
    const {puzzle, correctLetters} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPuzzleAction());
    }, [dispatch]);

    const handleReset = (): void => {
        dispatch(resetGameAction());
        dispatch(fetchPuzzleAction());
    };

    return (
        <div className="p-playPage">
            <header>
                <h1>HANGMAN</h1> <p> </p>
            </header>

            <div className="p-playPage__puzzle">
                {puzzle.split('').map((letter, i) => {
                    for (const ltr of letter) {
                        if (ltr === ' ') {
                            return <span>&nbsp;</span>;
                        }
                        if (ltr.match(/[a-z]/gi)) {
                            return (
                                <span className="p-playPage__puzzle_letter" key={i}>
                                    {correctLetters.includes(letter.toLocaleLowerCase()) ? letter : '_'}
                                </span>
                            );
                        } else if (!ltr.match(/[a-z]/gi)) {
                            return (
                                <p className="p-playPage__puzzle_letter" key={i}>
                                    {ltr}
                                </p>
                            );
                        }
                    }
                })}
            </div>

            <Keyboard />
            <button onClick={handleReset}>RESET</button>
        </div>
    );
};

export default PlayPage;
