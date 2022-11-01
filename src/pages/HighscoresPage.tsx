import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {fetcgHighscoresAction} from '../store/actions/gameActions';
import {StoreState} from '../store/reducers/rootReducer';

const HighscoresPage = (): ReactElement => {
    const {highscores} = useSelector((state: StoreState) => state.gameReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getScore = (L: number, U: number, E: number, T: number): number => {
        return 100 / (1 + E) + (U + L) / T;
    };

    useEffect(() => {
        dispatch(fetcgHighscoresAction());
    }, [dispatch]);

    const userScoreArr: {name: string | undefined; score: number | undefined}[] = highscores.map((score) => {
        return {name: score.userName, score: getScore(score.length, score.uniqueCharacters, score.errors, score.duration)};
    });

    const scores = userScoreArr.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
        return b.score! - a.score!;
    });

    return (
        <div className="p-highscores">
            {scores.map((el, i) => {
                return (
                    <p key={i}>
                        {i + 1} {el.name} Score: {el.score?.toFixed(2)}
                    </p>
                );
            })}

            <button className="button" onClick={() => navigate('/play')}>
                Back
            </button>
        </div>
    );
};

export default HighscoresPage;
