import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {resetGame} from '../store/features/gameSlice';
import {RootState, useAppDispatch, useAppSelector} from '../store/store';
import {fetchHighscoreTable} from '../store/thunks/gameThunks';
import BeatLoader from 'react-spinners/BeatLoader';

const HighscoresPage: React.FC = () => {
    const {highscores, isLoading} = useAppSelector((state: RootState) => state.game);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const getScore = (L: number, U: number, E: number, T: number): number => {
        return 100 / (1 + E) + (U + L) / T;
    };

    useEffect(() => {
        dispatch(fetchHighscoreTable());
    }, [dispatch]);

    const handlePlayAgain = (): void => {
        dispatch(resetGame());
        navigate('/play');
    };

    return (
        <div className="p-highscores">
            {isLoading ? (
                <BeatLoader size={10} cssOverride={{margin: 50}} />
            ) : (
                <>
                    <table className="mt-2">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Player</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </table>
                    <button className="p-highscores__button" onClick={handlePlayAgain}>
                        Play again
                    </button>
                </>
            )}
        </div>
    );
};

export default HighscoresPage;
