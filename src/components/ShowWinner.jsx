const ShowWinner = (props) => {
    const { winner } = props;
    return <section className="show-winner">
        {winner > 0 &&
            <span>The winner is the player {winner}</span>
        }
    </section>

}
export default ShowWinner;