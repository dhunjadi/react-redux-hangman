import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {fetcgHighscoresAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const HighscoresPage = (): ReactElement => {
    const {highscores} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(highscores);

    useEffect(() => {
        dispatch(fetcgHighscoresAction());
    }, [dispatch]);

    return (
        <div className="p-highscores">
            {highscores.map((score) => {
                return <span key={score.id}>{score.userName}</span>;
            })}
        </div>
    );
};

export default HighscoresPage;
