export interface Puzzle {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}

export interface ScoreData {
    quoteId: string;
    length: number;
    uniqueCharacters: number;
    userName: string;
    errors: number;
    duration: number;
}

export interface Highscore {
    id: number;
    quoteId: string;
    length: number;
    userName: string;
    uniqueCharacters: number;
    errors: number;
    duration: number;
}

