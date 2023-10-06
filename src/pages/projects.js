import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import ProjectItem from "../components/ProjectItem"
import SEO from "../components/seo"

import * as S from '../components/ListWrapper/styled'
import * as Base from '../styles/base';


const ProjectsPage = () => {
    const { allMarkdownRemark: { edges: projects } } = useStaticQuery(graphql`query projects {
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "project"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        frontmatter {
          title
          date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
          description
          category
          tags
          thumbnailImage {
            relativePath
          }
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }
}`)

    return (
        <Layout>
            <SEO
                title="Projects"
                description="Some projects that I made."
            />
            <Base.MainContent>
                <h1>Projects</h1>
            </Base.MainContent>

            <S.ListWrapper>
                {projects.map(({ 
                    node: { 
                        fields: { 
                            slug 
                        }, 
                        frontmatter: { 
                            title,
                            date,
                            description, 
                            tags, 
                            thumbnailImage: {
                                relativePath
                            } 
                        },
                        timeToRead
                    } 
                }, index) => (
                    <ProjectItem
                        key={index}
                        title={title}
                        date={date}
                        timeToRead={timeToRead}
                        description={description}
                        slug={slug}
                        tags={tags}
                        thumbnailImage={relativePath}
                    />
                ))}
            </S.ListWrapper>
            
        </Layout>
    )
};

export default ProjectsPage;