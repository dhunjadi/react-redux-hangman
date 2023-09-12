import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetGame, setPlayerName} from '../store/features/gameSlice';
import {RootState, useAppSelector} from '../store/store';

const NamePage: React.FC = () => {
    const {playerName, puzzle} = useAppSelector((state: RootState) => state.game);
    const [name, setName] = useState<string>(playerName || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (puzzle.content) dispatch(resetGame());
        if (name) {
            dispatch(setPlayerName(name));
            navigate('/play');
        }
    };

    const isDisabled = !name;

    return (
        <div className="p-namePage">
            <form className="p-namePage__form" onSubmit={onSubmit}>
                <input
                    className="p-namePage__form_input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                />
                <button className={`button ${isDisabled && 'is-disabled'} w-100`} type="submit" disabled={isDisabled}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default NamePage;
