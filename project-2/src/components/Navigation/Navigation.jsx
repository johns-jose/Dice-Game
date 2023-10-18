import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
  console.log(styles)
  return (
    
        <nav className={`${styles.navigation} container`}>
            <div className='logo'>
                <img src="/images/Frame 2 1.png" alt="logo" />
            </div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    
  )
}

export default Navigation