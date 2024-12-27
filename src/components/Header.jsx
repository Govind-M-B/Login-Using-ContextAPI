import React from 'react'

const Header = () => {
    const user ="Guest";
  return (
    <div className='ui fixed menu'>
        <div className='ui conainer center'>
            <h2> react ContextApi</h2>
            <div className='profile'>
                <h3>Welcome, {user}</h3>
  
            </div>
        </div>
      
    </div>
  )
}

export default Header
