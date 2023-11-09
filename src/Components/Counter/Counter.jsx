import React from 'react'
import Container from '../Container'
import counterImgOne from '../../assets/counterImgOne.png'

const Counter = () => {
  return (
    <div className='bg-[#FFF6E6]'>
        <Container className='pb-16 lg:pb-40'>
            <div className='lg:flex gap-x-[151px]'>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgOne} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>26+</h2>
                    <p className='font-rale text-xl font-bold'>Awards  won</p>
                </div>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgOne} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>65+</h2>
                    <p className='font-rale text-xl font-bold'>States covered</p>
                </div>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgOne} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>689K+</h2>
                    <p className='font-rale text-xl font-bold'>Happy clients</p>
                </div>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgOne} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>130M+</h2>
                    <p className='font-rale text-xl font-bold'>Goods delivered</p>
                </div>
                <div className='text-center'>
                    <img className='mx-auto' src={counterImgOne} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>130M+</h2>
                    <p className='font-rale text-xl font-bold'>Business hours</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Counter