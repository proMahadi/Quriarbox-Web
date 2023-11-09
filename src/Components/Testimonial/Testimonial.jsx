import React from 'react'
import Container from '../Container'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import Title from '../Title'
import Flex from '../Flex'
import testimonialImg from '../../assets/testimonialImg.png'

const Testimonial = () => {
  return (
    <div className='bg-[#FFF6E6]'>
        <Container className='pt-7 pb-24'>
            <Flex className='justify-center'>
                <BiSolidQuoteLeft className='text-[133px] text-[#FFD88D]'/>
                <Title sectionName='TESTIMONIAL' titleName='Our Awesome Clients'/>
            </Flex>
            <div className='pt-10 pl-10 pr-7 pb-9 bg-white lg:w-[872px] mx-auto rounded-2xl shadow'>
                <h4 className='font-bold text-primary font-rale text-2xl'>Fantastic service!</h4>
                <p className='font-rale text-base text-[#464558] mt-3 '>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                <div className='lg:flex lg:justify-between'>
                    <div className='flex text-primary text-xl mt-7 gap-x-1'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <div className='flex mt-6 gap-x-3'>
                        <div>
                            <h5 className='lg:flex lg:justify-end font-bold text-base font-rale text-secondary'>Yves Tanguy</h5>
                            <p className='font-rale text-base text-[#464558] '>Chief Executive, DLF</p>
                        </div>
                        <img className='rounded-full' src={testimonialImg} alt="testimonialImg" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonial