import './App.css';
import Row from './components/Row';
import Board from './components/Board';
import dataBoard from './dataBoard';
import { useState } from 'react';
import calculateWinner from './calculateWinner';
import ShowWinner from './components/ShowWinner';
import ChoosePieces from './components/ChoosePieces'
function App() {
  const [ data ]= useState(dataBoard);
  const [movement, setMovement ]= useState([]);
  const [player, setPlayer ] = useState(0);
  const [winner, setWinner] = useState(0)
  const [whoPlayStart, seetWhoPlayStart] = useState(0)
  const handlePlay = e => {
    if (whoPlayStart === 0) return
    const turn = player + 1
    setPlayer(turn)
    const position = e.currentTarget.getAttribute('data-position').split(',').map(value => parseInt(value))
    const newMovment  = [...movement]
    newMovment.push({position, state:'played', player: turn % 2 === 0? 2: 1})
    setMovement(newMovment);
    const whoIsWinner = calculateWinner(newMovment)
    setWinner(whoIsWinner.player);
  };
  
  const fillRows = data.map(rowData => 
    <Row 
      rowData={rowData} 
      onClickPlay={handlePlay}
      movement={movement}
      player={player}
      whoPlay={whoPlayStart}
    />
  );

  const handleReset = () => {
    setMovement([])
    setPlayer(0)
    setWinner(0)
  }
  const handleChoose = e => {
    seetWhoPlayStart(e.currentTarget.id)
    console.log(e.currentTarget.id)
  }
  return (
    <div className="App">
      <button onClick={handleReset}>Reset game</button>
      <ChoosePieces onChoose={handleChoose}/>
      <Board>
        {fillRows}
      </Board>
      <ShowWinner winner={winner}/>
    </div>
  );
}

export default App;
