import React from "react"

const Square = ({square}) => {

  const handleCLick = () => {

  }
  
  return (
    <>
      <div className="square" onClick={handleCLick}>{square}</div>
    </>
  )
}
export default Square
