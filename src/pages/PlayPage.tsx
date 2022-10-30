import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPuzzleAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const PlayPage = (): ReactElement => {
    const {player} = useSelector((state: StoreState) => state.playerReducer);
    const {puzzle} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPuzzleAction());
    }, [dispatch]);

    return (
        <div className="p-playPage">
            NAME: {player}
            PUZZLE: {puzzle}
        </div>
    );
};

export default PlayPage;
