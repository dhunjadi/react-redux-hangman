import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCorrectLetterAction, addIncorrectLetterAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';
import {v4 as uuidv4} from 'uuid';
import {KEY_ARRAY} from '../constants';

const Keyboard: React.FC = () => {
    const {puzzle, correctLetters, incorrectLetters, isWin, isLost} = useSelector((state: StoreState) => state.gameReducer);
    const {content} = puzzle;
    const dispatch = useDispatch();

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent): void => {
            if (!KEY_ARRAY.includes(e.key)) return;
            if (isWin || isLost) return;

            if (content.includes(e.key.toLowerCase()) && !correctLetters.includes(e.key))
                dispatch(addCorrectLetterAction(e.key.toLowerCase()));

            if (!content.includes(e.key.toLowerCase()) && !incorrectLetters.includes(e.key))
                dispatch(addIncorrectLetterAction(e.key.toLowerCase()));
        };

        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, incorrectLetters, isWin, isLost]);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const {value} = e.currentTarget;
        content.includes(value) ? dispatch(addCorrectLetterAction(value)) : dispatch(addIncorrectLetterAction(value));
    };

    const isDisabled = (letter: string): boolean => {
        if (isWin || isLost) return true;
        if (correctLetters.includes(letter) || correctLetters.includes(letter.toLocaleUpperCase())) return true;
        if (incorrectLetters.includes(letter) || incorrectLetters.includes(letter.toLocaleUpperCase())) return true;
        return false;
    };

    const getModifier = (key: string): string | undefined => {
        if (correctLetters.includes(key)) return 'c-keyboard__key--correct';
        if (incorrectLetters.includes(key)) return 'c-keyboard__key--incorrect';
        return;
    };

    return (
        <div className="c-keyboard">
            {KEY_ARRAY.map((key) => (
                <button
                    className={`c-keyboard__key ${getModifier(key)}`}
                    key={uuidv4()}
                    value={key}
                    onClick={handleButtonClick}
                    disabled={isDisabled(key)}
                >
                    {key}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
