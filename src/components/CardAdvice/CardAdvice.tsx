import React from 'react'
import './CardAdvice.scss'
import patternDivider from '../../assets/pattern-divider-desktop.svg'
import dice from '../../assets/icon-dice.svg'

const CardAdvice: React.FC = () => {
  return (
      <div className='card'>
        <div className="card-title">ADVICE #117</div>
        <div className='card-advice'>"It is easy to sit up and take notice, What is difficult is getting up and taking action."</div>
        <img src={patternDivider} className='card-patternDivider'/>
        <figure className="card-circle">
          <img src={dice} className='card-dice'/>
        </figure>
      </div>
  )
}

export default CardAdvice