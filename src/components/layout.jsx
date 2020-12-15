import React from "react"
import Header from './header'
import PreloadFonts from './preload-fonts'

export default function Layout({ children }) {
  return (
    <div className="px-4 md:px-8 max-w-screen-lg mx-auto pb-16">
      <PreloadFonts></PreloadFonts>
      <Header></Header>
      <div>
        {children}
      </div>
    </div>
  )
}
