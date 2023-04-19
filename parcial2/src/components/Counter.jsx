import { useState } from "react"

export const Counter = ({ handleRes, handleSum }, num) => {
    return (
    <>
        <button onClick={() => handleSum(num)}>+1</button>
        <button onClick={() => handleRes(num)}>-1</button>
    </>
    )

}