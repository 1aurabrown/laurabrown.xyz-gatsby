import React from "react"
import Header from './header'
import PreloadFonts from './preload-fonts'

export default function Layout({ children }) {
  return (
    <div className="px-4 md:px-8 max-w-screen-lg mx-auto">
      <PreloadFonts></PreloadFonts>
      <Header></Header>
      <div className="py-16">
        {children}
      </div>
    </div>
  )
}
