import React from "react"
import Header from './header'
import './layout.css'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div>
        {children}
      </div>
    </div>
  )
}