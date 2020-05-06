import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

export default function Home({ data }) {
  const projects = data.prismic.allProjects.edges
  return (
    <Layout>
      <div>
        <Projects projects={projects}></Projects>
      </div>
    </Layout>
  )
}

const Projects = ({ projects }) => {
  if (!projects) return null
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Year</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(({ node }, index) => (
          <tr key={node._meta.id}>
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

export const query = graphql`
  {
    prismic {
      allProjects(sortBy: year_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            description
            year
            role
          }
        }
      }
    }
  }
`