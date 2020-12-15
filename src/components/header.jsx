import styles from './header.module.css'
import React from "react"

export default function Header({ children }) {
  return (
    <div className='sticky top-0'>
      <div className="bg-white pt-8 pb-4 flex justify-between items-end font-compagnon">
        <h1 className="text-2xl">Laura Brown</h1>
        <div className="space-x-4">
          <a href="mailto:hi@laurabrown.xyz" target="_blank" title="Email Me">Contact</a>
          {/*<button title="About">About</button>*/}
        </div>
      </div>
      <div className={styles.headerBackground + ' h-10'}>
      </div>
    </div>
  )
}
