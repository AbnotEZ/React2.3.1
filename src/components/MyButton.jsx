import React from 'react'

const MyButton = ({text, search}) => {
  return (
    <button onClick={search}  className="h-10  bg-red-500 text-white duration-500 px-6 py2 mx-4 hover:bg-black rounded">{text.toUpperCase()}</button>
  )
}

export default MyButton