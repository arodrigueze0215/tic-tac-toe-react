const ChoosePieces = (props) => {
    const { onChoose } = props
    return (
        <div className="choose-container">
            <label htmlFor="choose-X">
                <div className="choose-container__players">
                    <input id="choose-player1-x" type="radio" name ="choose" onClick={onChoose}/>
                    <div className="choose__message_players">
                        <span>Player 1 <strong>X</strong></span>
                        <span>Player 2 <strong>O</strong></span>
                    </div>
                </div>
            </label>
            <label htmlFor="choose-O">
                <div className="choose-container__players">
                    <input id="choose-player1-o" type="radio" name ="choose" onClick={onChoose}/>
                    <div className="choose__message_players">
                        <span>Player 2 <strong>X</strong></span>
                        <span>Player 1 <strong>O</strong></span>
                    </div>
                </div>
            </label>
        </div>
    )

}
export default ChoosePieces