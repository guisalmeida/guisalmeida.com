import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as Base from '../styles/base';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />

    <Base.MainContent>
      <h1>Page not found</h1>
    </Base.MainContent>
  </Layout>
)

export default NotFoundPage
