import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPuzzleAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';
import {v4 as uuidv4} from 'uuid';

const Puzzle = (): ReactElement => {
    const {puzzle, correctLetters} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPuzzleAction());
    }, [dispatch]);

    const regex = /[a-z]/gi;

    return (
        <div className="c-puzzle">
            {puzzle.split('').map((letter) => {
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
                                {correctLetters.includes(letter.toLocaleLowerCase()) ? letter : ''}
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
