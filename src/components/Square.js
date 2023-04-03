import React from "react"

const Square = ({square ,index, handleGamePlay}) => {

  const handleCLick = () => {

  }
  
  return (
    <>
      <div className="square" onClick={handleCLick}>{square}</div>
    </>
  )
}
export default Square
