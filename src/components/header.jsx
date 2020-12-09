import React from "react"

export default function Header({ children }) {
  return (
    <div className="py-8 sticky top-0">
      <div className="flex justify-between text-sm">
        <h1>Laura Brown</h1>
        <div className="space-x-4 ">
          <a href="mailto:hi@laurabrown.xyz" target="_blank" title="Email Me">Contact</a>
          {/*<button title="About">About</button>*/}
        </div>
      </div>
    </div>
  )
}
