import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import dice from "../Images/dices 1.png"; 
import Button from "./Button"; // Assuming you have a Button component

const Page1 = () => {
  const navigate = useNavigate(); 
  return (
    <div className="page1">
      <div className="dice-img">
        <img src={dice} alt="Dice" />
      </div>
      <div className="page1-text">
        <div className="dice-game">DICE GAME</div>
        <div className="play-now-btn">
          <Button 
            text="Play Now" 
            width="120px" 
            height="30px"
            onClick={()=>
            
              navigate('/playNow')
            } // Attach the click handler
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
