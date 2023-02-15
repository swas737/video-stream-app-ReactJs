import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const List = ["All" , "Live" , "Gaming" , "Music" , "News" , "Cricket", "Mixes" , "Stock","Shows","Javascript","Thoughts"];
  return (
    <div className='flex'>
        {List.map((d,i)=>{return <Button name={d} key={i} />})}
    </div>
  )
}

export default ButtonList