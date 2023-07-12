import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTimeAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const Timer: React.FC = () => {
    const {puzzle, incorrectLetters, isWin, isLost} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    const [time, setTime] = useState<number>(0);
    const [isTimerOn, setIsTimerOn] = useState<boolean>(true);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined = undefined;

        if (isTimerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1);
        } else if (!isTimerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isTimerOn]);

    useEffect(() => {
        if (time === 0) setIsTimerOn(true);

        if (isWin || isLost) {
            setIsTimerOn(false);
            dispatch(setTimeAction(time));
        }

        if (puzzle.length === 0) setTime(0);
    }, [isWin, isLost, incorrectLetters, puzzle.length]);

    return <></>;
};

export default Timer;
