import { Group, Board } from './Board.type';

export enum SudokuValue {
    EMPTY = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
}

export type SudokuGroup = Group<SudokuValue>;
export type SudokuBoard = Board<SudokuValue>;
