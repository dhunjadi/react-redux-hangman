/* eslint-disable no-console */
import axios from 'axios';

export interface IWordToGuess {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}

export const fetchWordToGuess = (): Promise<IWordToGuess> => {
    return axios
        .get('http://api.quotable.io/random')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
