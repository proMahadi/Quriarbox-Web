import React from 'react'
import Container from '../Container'
import Title from '../Title'
import Flex from '../Flex'
import mapImg from '../../assets/mapImg.png'
import {TiLocationOutline} from 'react-icons/ti'
import {CiClock2} from 'react-icons/ci'
import {FiMail} from 'react-icons/fi'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImPhone} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'

const Location = () => {
  return (
    <div className='bg-[#FFF6E6]'>
        <Container className='pb-[183px]'>
            <Title sectionName='FIND US' titleName='Access us easily'/>
            <div className='lg:flex gap-x-6'>
                <div>
                    <img src={mapImg} alt="mapImg" className='w-full' />
                </div>
                <div className='bg-white pt-20 pl-6 lg:pl-[88px] pb-[88px] lg:pr-32'>
                    <h5 className='font-rale  text-lg lg:text-xl font-bold text-[#464558] mb-10'>Contact with us</h5>
                    <Flex className='items-center gap-x-3.5 mb-4' >
                        <TiLocationOutline className='text-[#FFAF0F] text-3xl'/>
                        <p className='text-base font-rale text-[#5C5B6C]'>2277 Lorem Ave, San Diego, CA 22553</p>
                    </Flex>
                    <Flex className='items-center gap-x-3.5 mb-4' >
                        <CiClock2 className='text-[#FFAF0F] text-3xl'/>
                        <p className='text-base font-rale text-[#5C5B6C]'>Monday - Friday: 10 am - 10pm  <span className='block'>Sunday: 11 am - 9pm</span></p>
                    </Flex>
                    <Flex className='items-center gap-x-3.5' >
                        <FiMail className='text-[#FFAF0F] text-3xl'/>
                        <p className='text-base font-rale text-[#5C5B6C]'>2277 Lorem Ave, San Diego, CA 22553</p>
                    </Flex>
                    <div className='flex mt-[51px] gap-x-6'>
                        <FaFacebookSquare className='text-[22px] text-[#EBEBF5] hover:text-primary duration-300'/>
                        <AiFillInstagram className='text-[22px] text-[#EBEBF5] hover:text-primary duration-300'/>
                        <FaTwitterSquare className='text-[22px] text-[#EBEBF5] hover:text-primary duration-300'/>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8'>
            <button className='px-3.5 py-3 lg:px-28 lg:py-6 bg-primary text-white font-oxa text-xl rounded-md '><ImPhone className='inline-block text-3xl mr-3'/> Call us to delivery  123-456789</button>
            </div>
        </Container>
    </div>
  )
}

export default Location