import React from 'react';
import { Grid } from '@chakra-ui/react';
import { SudokuBoard } from '../types/Sudoku.type';
import { ErrorBoard } from '../types/Error.type';
import { getRowErrorBoard, getColErrorBoard, getBoxErrorBoard } from '../logic/findErrors';
import Cell from './Cell';

interface BoardProps {
    board: SudokuBoard;
}

const Board: React.FC<BoardProps> = ({ board }) => {
    const rowErrorBoard: ErrorBoard = getRowErrorBoard(board);
    const colErrorBoard: ErrorBoard = getColErrorBoard(board);
    const boxErrorBoard: ErrorBoard = getBoxErrorBoard(board);

    return (
        <Grid
            templateColumns="repeat(9, 1fr)" // Fix: Creates 9 equal columns
            width="fit-content"
            padding="10px"
        >
            {
                board.map((row, rowIndex) => {
                    return row.map((value, colIndex) => {
                        return <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={value}
                            rowError={rowErrorBoard[rowIndex][colIndex]}
                            colError={colErrorBoard[rowIndex][colIndex]}
                            boxError={boxErrorBoard[rowIndex][colIndex]}
                        />;
                    });
                })
            }
        </Grid>
    );
};

export default Board;
