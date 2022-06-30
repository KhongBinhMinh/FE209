import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className="menu">
            <li><Link href="/"><a className='menu_item'>Home page</a></Link></li>
            <li><Link href="/about"><a className='menu_item'>About</a></Link></li>
            <li><Link href="/products"><a className='menu_item'>Products</a></Link></li>
            <li><Link href="/contact"><a className='menu_item'>Contact</a></Link></li>
        </ul>
    </div>
  )
}

export default Header