import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { SudokuValue } from '../types/Sudoku.type';

interface CellProps {
    value: SudokuValue;
    rowError: boolean;
    colError: boolean;
    boxError: boolean;
}

const Cell: React.FC<CellProps> = ({ value, rowError, colError, boxError }) => {
    const hasError = rowError || colError || boxError;

    return (
        <Box
            width="40px"
            height="40px"
            border="1px solid black"
            backgroundColor={hasError ? "red" : "white"}  // Red background for errors
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.5em"
        >
            <Text>
                {value === SudokuValue.EMPTY ? '' : value}
            </Text>
        </Box>
    )
}

export default Cell;
