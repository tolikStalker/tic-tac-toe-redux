    export const newGame =()=> {
        return {
            type: 'NEW_GAME'
        }
    }

    export const gameTurn = (field)=> {
        return {
            type: 'TURN_GAME',
            field: field
        }
    }

    export const endGame = ()=> {
        return {
            type: 'END_GAME',
        }
    }