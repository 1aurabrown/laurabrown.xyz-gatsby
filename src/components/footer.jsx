import React from "react"
import parse from 'html-react-parser';

export default function Footer({ children, footer }) {
  return (
    <div className="text-sm mt-8 compagnon-links">
      {parse(footer.edges[0].node.data.text.html)}
    </div>
  )
}
