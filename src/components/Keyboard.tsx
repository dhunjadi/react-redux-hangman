import React, {ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCorrectLetterAction, addIncorrectLetterAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const Keyboard = (): ReactElement => {
    const {puzzle, correctLetters, incorrectLetters} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    const keys = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const {value} = e.currentTarget;
        puzzle.includes(value) ? dispatch(addCorrectLetterAction(value)) : dispatch(addIncorrectLetterAction(value));
    };

    const isDisabled = (letter: string): boolean => {
        if (correctLetters.includes(letter) || correctLetters.includes(letter.toLocaleUpperCase())) return true;
        if (incorrectLetters.includes(letter) || incorrectLetters.includes(letter.toLocaleUpperCase())) return true;
        return false;
    };

    return (
        <div className="c-keyboard">
            {keys.map((key) => (
                <button key={key} value={key} onClick={handleButtonClick} disabled={isDisabled(key)}>
                    {key}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
