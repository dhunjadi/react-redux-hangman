import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {StoreState} from '../store/reducers/rootReducer';
import { setPlayerNameAction } from '../store/actions/gameActions';

const NamePage: React.FC = () => {
    const {playerName} = useSelector((state: StoreState) => state.gameReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState<string>(playerName || '');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (name) {
            dispatch(setPlayerNameAction(name));
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
                <button className={`button ${isDisabled && 'is-disabled'}`} type="submit" disabled={isDisabled}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default NamePage;
