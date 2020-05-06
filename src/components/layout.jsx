import React from "react"
import Header from './header'
import './layout.css'

export default function Layout({ children }) {
  return (
    <div className="px-8 max-w-screen-lg mx-auto">
      <Header></Header>
      <div className="">
        {children}
      </div>
    </div>
  )
}