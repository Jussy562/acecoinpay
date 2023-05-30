import React from 'react'

function ButtonPrimary(props) {
  return (
    <button className="transition ease-in-out delay-100  w-full  text-white  bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-none font-bold rounded-lg text-sm px-4 py-5 text-center mr-3 md:mr-0 dark:bg-blue-400 dark:hover:bg-blue-500  dark:focus:ring-none ">{props.name}</button>
  )
}

export default ButtonPrimary