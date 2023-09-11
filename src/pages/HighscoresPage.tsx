import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetGame, fetchHighscores, selectGameSlice} from '../store/features/gameSlice';

const HighscoresPage: React.FC = () => {
    const {highscores, isLoading} = useSelector(selectGameSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getScore = (L: number, U: number, E: number, T: number): number => {
        return 100 / (1 + E) + (U + L) / T;
    };

    useEffect(() => {
        dispatch(fetchHighscores());
    }, [dispatch]);

    const handlePlayAgain = (): void => {
        dispatch(resetGame());
        navigate('/play');
    };

    return (
        <div className="p-highscores">
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <table className="mt-2">
                        <tr>
                            <th>#</th>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>
                        {highscores
                            .map((highscore) => {
                                return {
                                    ...highscore,
                                    score: getScore(highscore.length, highscore.uniqueCharacters, highscore.errors, highscore.duration),
                                };
                            })
                            .sort((a, b) => {
                                return b.score - a.score;
                            })
                            .map((player, i) => {
                                return (
                                    <tr key={player.id}>
                                        <td>{i + 1}</td>
                                        <td>{player.userName}</td>
                                        <td>{player.score.toFixed(2)}</td>
                                    </tr>
                                );
                            })}
                    </table>
                    <button className="button w-50 mt-2" onClick={handlePlayAgain}>
                        Play again
                    </button>
                </>
            )}
        </div>
    );
};

export default HighscoresPage;
