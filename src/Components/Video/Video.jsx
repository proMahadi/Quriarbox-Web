import React from 'react'
import Container from '../Container'
import vdo from '../../assets/vdo.png'

const Video = () => {
  return (
    <div className='bg-[#FFF6E6]'>
        <Container className='pb-16 lg:pb-[150px]'>
            <img className='hover:cursor-pointer' src={vdo} alt="vdo" />
        </Container>
    </div>
  )
}

export default Video