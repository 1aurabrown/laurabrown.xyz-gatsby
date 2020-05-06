import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { linkResolver } from '../utils/linkResolver'

export default function Header() {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        prismic {
          allNavigations {
            edges {
              node {
                nav_item {
                  link {
                    ... on PRISMIC_Page {
                      _meta {
                        uid
                        type
                      }
                    }
                  }
                  link_text
                }
              }
            }
          }
        }
      }
    `
  )

  const navigation = data.prismic.allNavigations.edges[0].node

  return (
    <header className="flex flex-row">
      <h1>{data.site.siteMetadata.title}</h1>
      <ul>
        {navigation.nav_item.map((nav_item, index) => (
          <li key={index}><Link to={linkResolver(nav_item.link._meta)}>{nav_item.link_text}</Link></li>
        ))}
      </ul>
    </header>
  )
}

