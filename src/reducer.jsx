const initialState = {
    field: new Array(9).fill(null),
    gameEnd: false,
    xTurn: true,
    winCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    turnNumber: 0,
}

export function reducer (state = initialState, action) {
    switch (action.type) {
        case 'NEW_GAME':
            return {
                ...initialState,
            }
        case 'END_GAME':
            return {
                ...state,
                gameEnd: true
            };
            case 'TURN_GAME':
                return {
                    ...state,
                    field: action.field,
                    xTurn: !state.xTurn,
                    turnNumber: state.turnNumber+1,
                }
    }
    return state;
}