import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from '../components/Search'
import * as Base from '../styles/base'

const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const SearchPage = () => (
    <Layout>
        <SEO title="Search" />
        <Base.MainContent>
            <h1>Search</h1>
        </Base.MainContent>
        <Search algolia={algolia} />
    </Layout>
);

export default SearchPage;