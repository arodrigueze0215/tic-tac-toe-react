import Pieces from "./Pieces";

const Column = (props) => {
    const { onClickPlay, columnData, movement, whoPlay } = props;
    const { position } = columnData;
    const lastMovement = movement[movement.length -1];
    let someOnePlayed = false;
    let player = 0;
    if (movement.length > 0) {
        for (const eachMovement of movement) {
            if (someOnePlayed) break
            someOnePlayed = eachMovement.position.every((value, index) => value === position[index]);
            player = eachMovement.player
        }
        return <div className="Column" onClick={onClickPlay} data-position={position}> 
            { someOnePlayed && lastMovement.state === 'played' && player !== 0 && <Pieces whoPlay={whoPlay} player={player}/>}
        </div>
    } else {
        return <div className="Column" onClick={onClickPlay} data-position={position}> 
        </div>

    }
}

export default Column