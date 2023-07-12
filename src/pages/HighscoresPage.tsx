import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {fetcgHighscoresAction, resetGameAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const HighscoresPage: React.FC = () => {
    const {highscores} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getScore = (L: number, U: number, E: number, T: number): number => {
        return 100 / (1 + E) + (U + L) / T;
    };

    useEffect(() => {
        dispatch(fetcgHighscoresAction());
    }, [dispatch]);

    const handlePlayAgain = (): void => {
        dispatch(resetGameAction());
        navigate('/play');
    };

    return (
        <div className="p-highscores">
            <div className="p-highscores__descriptions">
                <span> #</span>
                <span> Player</span>
                <span> Score</span>
            </div>

            <div className="p-highscores__players">
                {highscores
                    .map((player) => {
                        return {...player, score: getScore(player.length, player.uniqueCharacters, player.errors, player.duration)};
                    })
                    .sort((a, b) => {
                        return b.score - a.score;
                    })
                    .map((player, i) => {
                        return (
                            <div key={player.id} className="p-highscores__players_player">
                                <span> {i + 1}.</span>
                                <span> {player.userName}</span>
                                <span> {player.score?.toFixed(2)}</span>
                            </div>
                        );
                    })}
            </div>

            <button className="button" onClick={handlePlayAgain}>
                Play again
            </button>
        </div>
    );
};

export default HighscoresPage;
