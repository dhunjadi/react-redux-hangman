import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetGame, setPlayerName} from '../store/features/gameSlice';
import {RootState, useAppSelector} from '../store/store';

const HomePage: React.FC = () => {
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
        <div className="p-homePage">
            <form className="p-homePage__form" onSubmit={onSubmit}>
                <input
                    className="p-homePage__form_input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                />
                <button className={`p-homePage__form_button ${isDisabled && 'is-disabled'}`} type="submit" disabled={isDisabled}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default HomePage;
