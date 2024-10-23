import React from 'react'

const DiceSelectBTN = (probs) => {
  return (
    <div>
      <button  {...probs } className='sqr-btn' style={probs.temp?{color:'black'}:{ color:'white'}}>
          {probs.number}
      </button>
    </div>
  )
}

export default DiceSelectBTN