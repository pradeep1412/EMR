import Image from 'next/image'
import React from 'react'
import Fitz from '../../../public/pics/Fitz.jpg'
import Fits from '../../../public/pics/Fitz.png'

function MainSection() {
  return (
    <div className='main_section'>
      <div className='main_section_grid'>
        <div className='main_section_grid_item_1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className='main_section_grid_item_2'>
          <Image src={Fitz} className='home_section' />
        </div>
      </div>
      <div className='main_section_grid_container_2'>
        <div className='main_section_grid_container_2_item_1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className='main_section_grid_container_2_item_2'>
          <Image src={Fits} className="main_section_grid_container_2"/>
        </div>
      </div>
    </div>
  )
}

export default MainSection