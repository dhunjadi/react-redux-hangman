import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {RootState, useAppDispatch, useAppSelector} from '../store/store';
import {fetchPuzzle} from '../store/thunks/gameThunks';

const Puzzle: React.FC = () => {
    const {puzzle, correctLetters} = useAppSelector((state: RootState) => state.game);
    const {content} = puzzle;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!puzzle.content) dispatch(fetchPuzzle());
    }, [dispatch, puzzle.content]);

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
