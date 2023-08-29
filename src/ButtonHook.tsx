import React from 'react'

type ButtonProps ={
    incrementar: React.Dispatch<React.SetStateAction<number>>
}

export const ButtonHook = ({incrementar}: ButtonProps) => {
  return (
    <button onClick={()=>incrementar((n) => n +1)}>Incrementar</button>
  )
}
