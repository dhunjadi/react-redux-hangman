import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setGameTime} from '../store/features/gameSlice';
import {RootState, useAppSelector} from '../store/store';

const Timer: React.FC = () => {
    const {puzzle, incorrectLetters, isWin, isLost} = useAppSelector((state: RootState) => state.game);
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
            dispatch(setGameTime(time));
        }

        if (puzzle.length === 0) setTime(0);
    }, [isWin, isLost, incorrectLetters, puzzle.length]);

    return <></>;
};

export default Timer;
