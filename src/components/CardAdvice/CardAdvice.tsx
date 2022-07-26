import React, { useState } from 'react'
import './CardAdvice.scss'
import patternDivider from '../../assets/pattern-divider-desktop.svg'
import patternDividerSmall from '../../assets/pattern-divider-mobile.svg'
import dice from '../../assets/icon-dice.svg'
import axios from 'axios'

const CardAdvice: React.FC = () => {
  const [advice, setAdvice] = useState<string>("")
  const [adviceNumber, setAdviceNumber] = useState<number>()
  const handleClick = async () => {
    try {
      const getAdvice = await axios({
        method: 'get',
        url: 'https://api.adviceslip.com/advice'
      })
      setAdvice(getAdvice.data.slip.advice)
      setAdviceNumber(getAdvice.data.slip.id)
    }
    catch(error) {
      console.error(error)
    }
  }
  return (
    <div className='card'>
      <div className='card__title'>ADVICE #{adviceNumber}</div>
      <div className='card__advice'>"{advice}"</div>
      <img src={patternDivider} className='card__patternDivider'/>
      <img src={patternDividerSmall} className='card__patternDividerSmall'/>
      <button className='card__button' onClick={handleClick}>  
          <img src={dice} className='card__dice'/>
      </button>
    </div>
  )
}

export default CardAdvice