import { SudokuValue, SudokuGroup, SudokuBoard } from '../types/Sudoku.type';
import { ErrorValue, ErrorGroup, ErrorBoard } from '../types/Error.type';

type IndexMapper = (row: number, col: number) => [number, number];

const getRowIndex: IndexMapper = (row, col) => {
    return [row, col];
};

const getColIndex: IndexMapper = (row, col) => {
    return [col, row];
};

const getBoxIndex: IndexMapper = (row, col) => {
    const newRow = (Math.floor(row / 3) * 3) + (Math.floor(col / 3));
    const newCol = ((row % 3) * 3) + (col % 3);
    return [newRow, newCol];
};

const hasError = (group: SudokuGroup): ErrorValue => {
    const seen = new Set<SudokuValue>();

    return group.some((value) => {
        /* Empty cell */
        if (value === SudokuValue.EMPTY) {
            return;
        }

        /* Duplicate */
        if (seen.has(value)) {
            return true;
        }

        /* New value */
        seen.add(value);
        return false;
    });
};

const getErrorGroups = (board: SudokuBoard): ErrorGroup => {
    return board.map((group) => {
        return hasError(group);
    }) as ErrorGroup;
};

const getGroupedBoard = (board: SudokuBoard, indexMapper: IndexMapper): SudokuBoard => {
    return board.map((row, rowIndex) => {
        return row.map((_, colIndex) => {
            const [newRowIndex, newColIndex] = indexMapper(rowIndex, colIndex);
            return board[newRowIndex][newColIndex];
        });
    }) as SudokuBoard;
};

const getErrorBoard = (board: SudokuBoard, errorGroups: ErrorGroup, indexMapper: IndexMapper): ErrorBoard => {
    return board.map((row, rowIndex) => {
        return row.map((_, colIndex) => {
            const [newRowIndex, newColIndex] = indexMapper(rowIndex, colIndex);
            return errorGroups[newRowIndex];
        });
    }) as ErrorBoard;
}

export const getRowErrorBoard = (board: SudokuBoard): ErrorBoard => {
    const groupedBoard = getGroupedBoard(board, getRowIndex);
    const errors = getErrorGroups(groupedBoard);
    const errorBoard = getErrorBoard(board, errors, getRowIndex);
    return errorBoard;
};

export const getColErrorBoard = (board: SudokuBoard): ErrorBoard => {
    const groupedBoard = getGroupedBoard(board, getColIndex);
    const errors = getErrorGroups(groupedBoard);
    const errorBoard = getErrorBoard(board, errors, getColIndex);
    return errorBoard;
};

export const getBoxErrorBoard = (board: SudokuBoard): ErrorBoard => {
    const groupedBoard = getGroupedBoard(board, getBoxIndex);
    const errors = getErrorGroups(groupedBoard);
    const errorBoard = getErrorBoard(board, errors, getBoxIndex);
    return errorBoard;
};
