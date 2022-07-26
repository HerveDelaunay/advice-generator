import React from 'react'
import './CardAdvice.scss'
import patternDivider from '../../assets/pattern-divider-desktop.svg'
import patternDividerSmall from '../../assets/pattern-divider-mobile.svg'
import dice from '../../assets/icon-dice.svg'

const CardAdvice: React.FC = () => {
  return (
      <div className='card'>
        <div className='card__title'>ADVICE #117</div>
        <div className='card__advice'>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</div>
        {/* {<img src={patternDivider} srcSet={`${patternDivider} 1440w, ${patternDividerSmall} 375w`}/>} */}
        <img src={patternDivider} className='card__patternDivider'/>
        <img src={patternDividerSmall} className='card__patternDividerSmall'/>
        <figure className='card__circle'>
          <img src={dice} className='card__dice'/>
        </figure>
      </div>
  )
}

export default CardAdvice