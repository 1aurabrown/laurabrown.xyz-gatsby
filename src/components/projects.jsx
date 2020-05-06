import React from "react"
import { RichText } from "prismic-reactjs"
import styles from './projects.module.css'

export default function Projects({ projects }) {
  if (!projects) return null

  return (
    <table className={styles.projects + ' w-full leading-loose md:text-2xl'}>
      <thead>
        <tr className='text-left border-solid border-b'>
          <th>Title</th>
          <th>Description</th>
          <th>Year</th>
          <th class={styles.role + ' text-center'}>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map(({ node }, index) => {
            var circleClass
            if ( node.role === "Design") {
              circleClass = styles.circleLeft
            } else if ( node.role === "Development") {
              circleClass = styles.circleRight
            } else if ( node.role === "Design + Development") {
              circleClass = styles.circleFull
            }
            return (
              <tr className={styles.dottedBorder} key={node._meta.id}>
                <td>{node.title}</td>
                <td>{node.description ? RichText.asText(node.description) : ''}</td>
                <td>{node.year}</td>
                <td class={styles.role + ' text-center'}>
                  <div className={`${styles.circle} ${circleClass}`}></div>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}