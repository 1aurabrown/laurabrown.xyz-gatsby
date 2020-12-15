import styles from './header.module.css'
import React from "react"

export default function Header({ children }) {
  return (
    <div className='sticky top-0 print:static'>
      <div className="bg-white pt-8 pb-4 flex print:block justify-between items-end font-compagnon">
        <h1 className="text-2xl">Laura Brown</h1>
        <div className="print:mt-4">
          <a href="mailto:hi@laurabrown.xyz print:block" target="_blank" title="Email Me">
            <span className="print:hidden">Contact</span>
            <span className="hidden print:block">laura@laurabrown.xyz</span>
          </a>
          <a className="hidden print:block" href="tel:+32(0)466268217" target="_blank" title="Email Me">
            tel:+32(0)466268217
          </a>
          <span className="hidden print:block">Friedrichstr. 123, 10117 Berlin, Germany</span>
          {/*<button title="About">About</button>*/}
        </div>
      </div>
      <div className={styles.headerBackground + ' h-10'}>
      </div>
    </div>
  )
}
