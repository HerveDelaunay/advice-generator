import React from 'react'
import './CardAdvice.scss'
import { ReactComponent as PatternBreaker } from '../../assets/pattern-divider-desktop.svg'

const CardAdvice: React.FC = () => {
  return (
    <div className="container">
      <div className='card'>
        <div className="card-title">Advice #117</div>
        <div className='card-advice'>"It is easy to sit up and take notice, What is difficult is getting up and taking action."</div>
        <PatternBreaker/>
      </div>
    </div>
  )
}

export default CardAdvice