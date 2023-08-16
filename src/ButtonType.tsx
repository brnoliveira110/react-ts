import React from 'react'

type ButtonProps={
  total: number;
  setTotal:  React.Dispatch<React.SetStateAction<number>>
}

export default function ButtonType({total, setTotal}: ButtonProps) {
  return (
    <button onClick={()=> setTotal((t)=> t + 1)}>Incrementar {total}</button>
  )
}

