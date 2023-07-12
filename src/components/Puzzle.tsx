import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPuzzleAction, resetGameAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';
import {v4 as uuidv4} from 'uuid';

const Puzzle: React.FC = () => {
    const {puzzle, correctLetters} = useSelector((state: StoreState) => state.gameReducer);
    const {content} = puzzle;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetGameAction());
        dispatch(fetchPuzzleAction());
    }, [dispatch]);

    const regex = /[a-z]/gi;

    return (
        <div className="c-puzzle">
            {content.split('').map((letter) => {
                for (const char of letter) {
                    if (char === ' ') {
                        return (
                            <div key={uuidv4()} className="c-puzzle__letter c-puzzle__letter--noUnderscore">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                        );
                    }
                    if (char.match(regex)) {
                        return (
                            <div key={uuidv4()} className="c-puzzle__letter">
                                {correctLetters.includes(letter.toLocaleLowerCase()) ? letter : '_'}
                            </div>
                        );
                    } else if (!char.match(regex)) {
                        return (
                            <div key={uuidv4()} className="c-puzzle__letter c-puzzle__letter--noUnderscore">
                                {char}
                            </div>
                        );
                    }
                }
            })}
        </div>
    );
};

export default Puzzle;
