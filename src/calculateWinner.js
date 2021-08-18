const X_LEFT_TO_RIGHT = 'x-left-to-right';
const X_RIGHT_TO_LEFT = 'x-right-to-left';

const ROW_ONE = 'row_one';
const ROW_TWO = 'row_two';
const ROW_THREE = 'row_three';

const COLUMN_ONE= 'column_one';
const COLUMN_TWO = 'column_two';
const COLUMN_THREE = 'column_three';

const playsToWin = new Map()
/**
 * |*|_|_|
 * |_|*|_|
 * |_|_|*|
    X movements to validate
 */
playsToWin.set(X_LEFT_TO_RIGHT, [[0, 0], [1, 1], [2, 2]])
/**
 * |_|_|*|
 * |_|*|_|
 * |*|_|_|
 X movements to validate
 */
playsToWin.set(X_RIGHT_TO_LEFT, [[0, 2], [1, 1], [2, 0]])

// Row two ways
playsToWin.set(ROW_ONE, [[0, 0], [0, 1], [0, 2]])
playsToWin.set(ROW_TWO, [[1, 0], [1, 1], [1, 2]])
playsToWin.set(ROW_THREE, [[2, 0], [2, 1], [2, 2]])

//Columns two ways
playsToWin.set(COLUMN_ONE, [[0, 0], [1, 0], [2, 0]])
playsToWin.set(COLUMN_TWO, [[0, 1], [1, 1], [2, 1]])
playsToWin.set(COLUMN_THREE, [[0, 2], [1, 2], [2, 2]])

const validateResult = (playerPoints) => {
    for (const [ key, value] of playerPoints.movementsPlayerOne.entries()) {
        const valueMap = value.map(point=> point);
        if ( value.length >= 3 && valueMap.every(point=> point)) return { winner: true, player: 1 }
    }
    for (const [key, value] of playerPoints.movementsPlayerTwo.entries()) {
        const valueMap = value.map(point=> point);
        if ( value.length >= 3 && valueMap.every(point=> point)) return { winner: true, player: 2 }
    }
    return { winner: false, player: 0 }
}

const validatePlayToWin = (position, type) => {
    let isPosiblePoint = false
    const posiblePoints = playsToWin.get(type);
    for (const value of Array.from(posiblePoints)) {
        isPosiblePoint = value[0] === position[0] && value[1] === position[1]
        if (isPosiblePoint) break;        
    }
    return isPosiblePoint
}
const asignPointToplayer = (playerPoints, player, isPoint, type) => {
    if (player === 1) {
        const pointsPlayerOne = playerPoints.movementsPlayerOne.get(type)
        if (pointsPlayerOne === undefined) {
            if (isPoint) playerPoints.movementsPlayerOne.set(type, [isPoint])
        }
        else {
            if (isPoint) {
                pointsPlayerOne.push(isPoint)
                playerPoints.movementsPlayerOne.set(type, pointsPlayerOne)                
            }

        }
    } else {
        const pointsPlayerTwo = playerPoints.movementsPlayerTwo.get(type)
        if (pointsPlayerTwo === undefined) playerPoints.movementsPlayerTwo.set(type, [isPoint])
        else {
            if (isPoint) {
                pointsPlayerTwo.push(isPoint)
                playerPoints.movementsPlayerTwo.set(type, pointsPlayerTwo)                
            }
        }
    }
    return playerPoints
}

const calculateWinner = (movements) => {
    let playerPoints = {
        movementsPlayerOne: new Map(),
        movementsPlayerTwo: new Map()
    }
    let playerWinner = { winner: false, player: 0 }
    let isPoint = false;
    if (movements.length > 3) {
        for (const movement of movements) {
            console.log(playerPoints)
            const { position, player } = movement;
            isPoint = validatePlayToWin(position, X_LEFT_TO_RIGHT);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, X_LEFT_TO_RIGHT)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, X_RIGHT_TO_LEFT);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, X_RIGHT_TO_LEFT)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, ROW_ONE);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, ROW_ONE)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, ROW_TWO);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, ROW_TWO)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, ROW_THREE);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, ROW_THREE)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, COLUMN_ONE);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, COLUMN_ONE)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, COLUMN_TWO);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, COLUMN_TWO)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
            isPoint = validatePlayToWin(position, COLUMN_THREE);
            playerPoints = asignPointToplayer(playerPoints, player, isPoint, COLUMN_THREE)
            playerWinner = validateResult(playerPoints);
            if (playerWinner.winner) break
        }
    }
    return playerWinner

}
export default calculateWinner;