import React from 'react'
import { homepageHeroContent, startReading } from '@content'
import Button from '@u-comp/button'
import './index.scss'

const Body = () => {
  return (
    <div className='body-wrapper'>
      <div className='body-wrapper__hero'>
        <div className='body-wrapper__hero-content'>
          <p className='body-wrapper__hero-content_main'>
            {homepageHeroContent.main}
          </p>
          <p className='body-wrapper__hero-content_subtext'>
            - {homepageHeroContent.subtext}
          </p>
          <Button title={startReading} />
        </div>
      </div>
    </div>
  )
}

export default Body
