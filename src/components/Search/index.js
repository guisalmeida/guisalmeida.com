import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import Hit from './Hit';

import * as S from './styled';

const Search = ({ algolia }) => {
    const searchClient = algoliasearch(
        algolia.appId,
        algolia.searchOnlyApiKey
    )

    return (
        <S.SearchWrapper>
            <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
                <SearchBox />
                <Stats />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </S.SearchWrapper>
    )
}


export default Search;