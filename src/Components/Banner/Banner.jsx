import React from 'react'
import Container from '../Container'
import bannerImg from '../../assets/banner.png'
import {FiArrowRight} from 'react-icons/fi'

const Banner = () => {
  return (
    <div className='bg-[#FFF6E6]'>
        <Container className='py-14 lg:py-[170px]'>
            <div className='lg:flex text-center lg:text-left'>
                <div className='lg:w-[35%]'>
                    <h1 className='font-rale text-[#261134] text-5xl'>A trusted provider of <span className='font-extrabold'>courier services.</span></h1>
                    <p className='font-rale text-xl text-[#4D4D4D] lg:w-[330px] mt-4 mb-10'>We deliver your products safely to your home in a reasonable time.</p>
                    <button className='mb-5 lg:mb-0 px-5 py-3 ml-2.5 bg-primary  rounded-md text-[#ffff] text-xl font-oxa'>Get started <FiArrowRight className='inline-block'/> </button>
                </div>
                <div className='lg:w-[65%]'>
                    <img src={bannerImg} alt="banner" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner