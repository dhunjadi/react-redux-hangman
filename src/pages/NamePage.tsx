import React, {ReactElement, useId, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setPlayerNameAction} from '../store/actions/playerActions';

const NamePage = (): ReactElement => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useId();
    const nameRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (nameRef.current?.value) {
            dispatch(setPlayerNameAction(nameRef.current?.value));
            navigate('/play');
        }
    };

    return (
        <div className="p-namePage">
            <form onSubmit={onSubmit}>
                <label htmlFor={id}>Name: </label>
                <input type="text" id={id} ref={nameRef} placeholder="Enter your name..." />
                <button type="submit">Continue</button>
            </form>
        </div>
    );
};

export default NamePage;
