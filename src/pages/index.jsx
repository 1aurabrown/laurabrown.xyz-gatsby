import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from '../components/projects'
import About from '../components/about'
import Footer from '../components/footer'
import {Helmet} from "react-helmet";

export default function Home({ data }) {
  const projects = data.allPrismicProject.edges
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Laura Brown</title>
        <description>data.allPrismicAboutText.edges[0].node.data.text.text</description>
        <link rel="canonical" href="https://laurabrown.xyz" />
      </Helmet>
      <About about={data.allPrismicAboutText}></About>
      <Projects projects={projects}></Projects>
      <div className="mt-2 text-xs text-right">
        <span className="circle mr-1 circle--left"></span><span>Design</span>
        <span className="ml-6 mr-3 circle circle--right"></span><span>Development</span>
      </div>
      <Footer footer={data.allPrismicFooterText}></Footer>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicFooterText {
      edges {
        node {
          data {
            text {
              html
            }
          }
        }
      }
    }
    allPrismicAboutText {
      edges {
        node {
          data {
            text {
              html
              text
            }
          }
        }
      }
    }
    allPrismicProject(sort: {order: DESC, fields: data___year}) {
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
