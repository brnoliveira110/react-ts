import React from 'react'

export const ButtonInterface = ({children}: React.PropsWithChildren) => {
    const handleClick: React.MouseEventHandler= (event)=>{
        console.log(event.pageX)
    }

  return (
    <button onClick={handleClick}>{children}</button>
  )
}
