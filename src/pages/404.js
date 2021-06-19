import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from '../styles/base';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não encontrada" />

    <MainContent>
      <h1>Página não encontrada</h1>
    </MainContent>
  </Layout>
)

export default NotFoundPage
