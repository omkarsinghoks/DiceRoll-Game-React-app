import React, { useState } from "react";
import DiceSelectBTN from "./DiceSelectBTN";
import dice1 from "../Images/dice_1.png";
import dice2 from "../Images/dice_2.png";
import dice3 from "../Images/dice_3.png";
import dice4 from "../Images/dice_4.png";
import dice5 from "../Images/dice_5.png";
import dice6 from "../Images/dice_6.png";
import Button from "./Button";
import Rules from "./Rules";

const Page2 = () => {
  const [score, setScore] = useState(0);
  const [temps, setTemps] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [index, setIndex] = useState(0);
  const [showRules, setShowRules] = useState(false); // State to control the visibility of Rules
  const img = [dice1, dice2, dice3, dice4, dice5, dice6];

  const resetHandler = () => {
    setScore(0);
    setTemps([false, false, false, false, false, false]);
    setIndex(0);
  };

  const imageHandler = () => {
    const len = img.length;
    let v = Math.floor(Math.random() * len);
    setIndex(v);

    
    const selectedIndex = temps.findIndex((temp) => temp === true);
    if (selectedIndex === v) {
      setScore((prevScore) => prevScore + (v + 1)); // Add score based on the dice value (1-6)
    }
    else{
      setScore((prevScore)=>prevScore-2)
    }
  };

  const rulesHandler = () => {
    setShowRules((prev) => !prev); // Toggle the visibility of Rules
  };

  const btnSelector = (e, index) => {
    setTemps((prevTemps) => {
      const newTemps = [...prevTemps];
      newTemps[index] = !newTemps[index]; // Toggle the selected state
      return newTemps;
    });
  };

  return (
    <div className="page2">
      <div className="top-field">
        <div>
          <div className="score-field">{score}</div>
          <div>Total Score</div>
        </div>
        <div className="sqrs-text-field">
          <div className="sqrs-btn">
            {[...Array(6)].map((_, i) => (
              <DiceSelectBTN
                key={i}
                number={i + 1}
                onClick={(e) => btnSelector(e, i)}
                value={i + 1}
                temp={temps[i]}
              />
            ))}
          </div>

          <div className="select-number">Select Number</div>
        </div>
      </div>
      <div className="dice-img-and-btn">
        <div onClick={imageHandler} className="dice-roll">
          <img src={img[index]} alt={`Dice ${index + 1}`} />
        </div>

        <div className="click">Click on Dice to roll</div>

        <div className="reset-show-btn">
          <Button
            text="Reset Score"
            onClick={resetHandler}
            className="reset-handler"
          />
          <Button text="Show Rules" onClick={rulesHandler} color="white"  clr="black"/>
        </div>
      </div>
      <div className="page2-rule">{showRules && <Rules />}</div>
    </div>
  );
};

export default Page2;
