import React from "react"
import a1 from '../../static/fonts/Compagnon-Bold.woff'
import a2 from '../../static/fonts/Compagnon-Bold.woff2'
import a3 from '../../static/fonts/Compagnon-Bold.eot'

import b1 from '../../static/fonts/Compagnon-Italic.woff2'
import b2 from '../../static/fonts/Compagnon-Italic.woff'
import b3 from '../../static/fonts/Compagnon-Italic.eot'

import c1 from '../../static/fonts/Compagnon-Light.woff2'
import c2 from '../../static/fonts/Compagnon-Light.woff'
import c3 from '../../static/fonts/Compagnon-Light.eot'

import d1 from '../../static/fonts/Compagnon-Medium.woff2'
import d2 from '../../static/fonts/Compagnon-Medium.woff'
import d3 from '../../static/fonts/Compagnon-Medium.eot'

import e1 from '../../static/fonts/Compagnon-Roman.woff2'
import e2 from '../../static/fonts/Compagnon-Roman.woff'
import e3 from '../../static/fonts/Compagnon-Roman.eot'

import f1 from '../../static/fonts/Compagnon-Roman.woff2'
import f2 from '../../static/fonts/Compagnon-Roman.woff'
import f3 from '../../static/fonts/Compagnon-Roman.eot'

import Helmet from 'react-helmet'

export default function PreloadFonts({ children }) {
  return (
    <Helmet>f
      <link rel="preload" as="font" href={a1} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={a2} type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={a3} type="font/eot" crossOrigin="anonymous" />

      <link rel="preload" as="font" href={b1} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={b2} type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={b3} type="font/eot" crossOrigin="anonymous" />

      <link rel="preload" as="font" href={c1} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={c2} type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={c3} type="font/eot" crossOrigin="anonymous" />

      <link rel="preload" as="font" href={d1} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={d2} type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={d3} type="font/eot" crossOrigin="anonymous" />

      <link rel="preload" as="font" href={e1} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={e2} type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={e3} type="font/eot" crossOrigin="anonymous" />

      <link rel="preload" as="font" href={f1} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={f2} type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={f3} type="font/eot" crossOrigin="anonymous" />

    </Helmet>
  )
}