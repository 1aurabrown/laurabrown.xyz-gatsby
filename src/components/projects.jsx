import React from "react"
import { RichText } from "prismic-reactjs"
import styles from './projects.module.css'

export default function Projects({ projects }) {
  if (!projects) return null
  return (
    <table className="w-full leading-loose md:text-2xl">
      <thead>
        <tr className='text-left border-solid border-b'>
          <th>Title</th>
          <th>Description</th>
          <th>Year</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(({ node }, index) => (
          <tr className={styles.dottedBorder} key={node._meta.id}>
            <td>{node.title}</td>
            <td>{node.description ? RichText.asText(node.description) : ''}</td>
            <td>{node.year}</td>
            <td>{node.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}