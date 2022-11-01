import React, {ReactElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTimeAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const Timer = (): ReactElement => {
    const {puzzle, incorrectLetters, win, lost} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(true);

    useEffect(() => {
        let interval: any = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1);
        } else if (!timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    useEffect(() => {
        if (time === 0) setTimerOn(true);

        if (win || lost) {
            setTimerOn(false);
            dispatch(setTimeAction(time));
        }

        if (puzzle.length === 0) setTime(0);
    }, [win, lost, incorrectLetters, puzzle.length]);

    return <></>;
};

export default Timer;
