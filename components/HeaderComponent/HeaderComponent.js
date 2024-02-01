import React from 'react'
import './HeaderComponent.css'

const HeaderComponent = () => {
  return (
    <div className='header__container'>
      <div className='header__box'>

        <div>
            <img className='logo' src='https://cdn5.vectorstock.com/i/1000x1000/66/59/meow-cat-face-vector-24886659.jpg'/>
        </div>
        <div>
            <div className='searchBar'>

            <input type='text' placeholder='search...'/>
            <img className='searchImg' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png'/>
            </div>
        </div>
        <div>
            <img className='userIcon' src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'/>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent