import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { linkResolver } from '../utils/linkResolver'

export default function Link({ children, to, activeClassName, partiallyActive, ...other }) {
  const isString = typeof to === 'String'
  const isPrismicWeb = to._linkType === 'Link.web'
  const isPrismicDoc = to._linkType === 'Link.document'
  const isInternalLink = function(url) { /^\/(?!\/)/.test(url) }
  return (

    // String Internal Path
    {isString && isInternalLink(to) && <Link to={to}>{children}</Link>}

    // String External URL
    {isString && !isInternalLink(to) && <a href={to}>{children}</a>}

    // Prismic Web Link Internal Path
    { isPrismicWeb && isInternalLink(to.url) && <Link href={to.url}>{children}</Link>}

    // Prismic Web Link External URL
    { isPrismicWeb && !isInternalLink(to.url) && <a href={to.url}>{children}</a>}

    // Prismic Doc
    { isPrismicDoc && <Link to={linkResolver(to._meta)}>{ children }</Link>}

    <div className="px-8 max-w-screen-lg mx-auto">
      <Header></Header>
      <div className="">
        {children}
      </div>
    </div>
  )
}
