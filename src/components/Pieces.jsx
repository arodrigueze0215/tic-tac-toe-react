const Pieces = (props) => {
    if (props.player === 1) {
        if (props.whoPlay === 'choose-player1-x') return<span>X</span>
        else return<span>O</span>
    } else {
        if (props.whoPlay === 'choose-player1-x') return<span>O</span>
        else return<span>X</span>

    }
}
export default Pieces;
