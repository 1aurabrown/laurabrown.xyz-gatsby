import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from '../components/projects'

export default function Home({ data }) {
  const projects = data.allPrismicProject.edges
  return (
    <Layout>
      <Projects projects={projects}></Projects>
      <div className="mt-2 text-xs text-right">
        <span className="circle mr-1 circle--left"></span><span>Design</span>
        <span className="ml-6 mr-3 circle circle--right"></span><span>Development</span>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicProject {
      edges {
        node {
          id
          data {
            title
            description {
              html
            }
            year
            role
            url {
              url
            }
          }
        }
      }
    }
  }
`
