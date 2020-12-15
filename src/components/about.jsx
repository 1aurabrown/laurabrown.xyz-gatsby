import React from "react"
import parse from 'html-react-parser';

export default function About({ children, about }) {
  return (
    <div className="avoid-break-inside underline-links">
      {parse(about.edges[0].node.data.text.html)}
    </div>
  )
}
