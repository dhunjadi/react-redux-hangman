/* eslint-disable no-console */
import axios from 'axios';

export interface IPuzzle {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}

export interface IScoreData {
    quoteId: string;
    length: number;
    uniqueCharacters: number;
    userName: string;
    errors: number;
    duration: number;
}

export const fetchWordToGuess = (): Promise<IPuzzle> => {
    return axios
        .get('http://api.quotable.io/random')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const sendScoreData = (): Promise<IScoreData> => {
    return axios
        .post('https://my-json-server.typicode.com/Serapion-ZG/hangman-ts/highscores')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
