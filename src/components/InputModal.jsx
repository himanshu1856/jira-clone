import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const InputModal = ({getModalData, handleModal}) => {
  const [priority, setPriority] = useState(1)

  const handleEnter = e => {
    if(e.key.toLowerCase() === 'enter'){
        let dataObj = {
            id : uuidv4(),
            text : e.target.value,
            priority : priority
        }
        getModalData(dataObj)
        handleModal()
    }
  }

  return (
    <div className='h-1/2 w-1/3 bg-gray-300 fixed top-[30%] left-[33%] flex rounded-md p-2 z-10'>
        <div className='h-full w-5/6'>
            <textarea className='bg-white h-full w-full outline-none p-2 font-mono' onKeyDown={handleEnter}></textarea>
        </div>
        <div className="w-1/6 flex flex-col items-center">
            <button className={`h-1/4 w-full bg-blue-200 hover:border-4 hover:border-white ${(priority === 1) && 'border-8 border-white'} `} onClick={() => setPriority(1)}></button>
            <button className={`h-1/4 w-full bg-blue-400 hover:border-4 hover:border-white  ${(priority === 2) && 'border-8 border-white'}`} onClick={() => setPriority(2)}></button>
            <button className={`h-1/4 w-full bg-blue-600  hover:border-4 hover:border-white  ${(priority === 3) && 'border-8 border-white'}`} onClick={() => setPriority(3)}></button>
            <button className={`h-1/4 w-full bg-blue-800  hover:border-4 hover:border-white  ${(priority === 4) && 'border-8 border-white'}`} onClick={() => setPriority(4)}></button>
        </div>
    </div>
  )
}

export default InputModal