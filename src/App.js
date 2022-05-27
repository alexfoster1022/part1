import React, { useState } from 'react';
import Style from './App.css';



const Display = props => <div>{props.value}</div>

const History = (props) => {
    if(props.allClicks.length === 0) {
        return (
            <div>
                Use the app by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            Button press history {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);
    const [value, setValue] = useState(0);
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


  const handleLeftClick = () => {
      setAll(allClicks.concat('L'));
      setLeft(left + 1);
  }
  const handleRightClick = () => {
      setAll(allClicks.concat('R'));
      setRight(right + 1);
  }
  const setToValue = (newValue) => () => {
      setValue(newValue);
  }

    return (
        <div>
         <Display value={left} />
         <Button handleClick={handleLeftClick} text="Left" />
         <Button handleClick={handleRightClick} text="Right" />
         <Display value={right} />
        <History allClicks={allClicks} />
        <button className="clear" onClick={() => [setLeft(0), setRight(0), setAll([])]}>
            Clear
        </button>
        <div className="breakline"></div>
        
        <button onClick={setToValue(1000)}>Thousand</button>
        <Display value={value} />
        <button onClick={setToValue(value + 1)}>Increment</button>
        <button onClick={setToValue(0)}>Reset</button>

        <div className="breakline"></div>

        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Display value={good} />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Display value={neutral} />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Display value={bad} />
        <button className="average" handleClick={() => (good + (neutral + bad) / 3)} />
        </div>
    )


}

export default App;




