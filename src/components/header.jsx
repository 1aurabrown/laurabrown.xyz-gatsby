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
    <header className="py-10 flex flex-row justify-between items-end">
      <h1 className="leading-7 md:text-4xl">{data.site.siteMetadata.title}</h1>
      <ul className="leading-5 md:text-2xl flex flex-row justify-end">
        {navigation.nav_item.map((nav_item, index) => (
          <li className="ml-4" key={index}><Link to={linkResolver(nav_item.link._meta)}>{nav_item.link_text}</Link></li>
        ))}
      </ul>
    </header>
  )
}

