import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from '../components/projects'

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