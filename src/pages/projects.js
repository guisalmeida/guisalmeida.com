import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import ProjectItem from "../components/ProjectItem"
import SEO from "../components/seo"

import * as S from '../components/ListWrapper/styled'
import { MainContent } from '../styles/base';


const ProjectsPage = () => {
    const { allMarkdownRemark: { edges: projects } } = useStaticQuery(graphql`
        query projects {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            category
                            thumbnailImage {
                                relativePath
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO
                title="Projetos"
                description="Alguns projetos de portfólio."
            />
            <MainContent>
                <h1>Projetos</h1>
            </MainContent>

            <S.ListWrapper>
                {projects.map(({ node: { fields: { slug }, frontmatter: { title, description, thumbnailImage: {relativePath} } } }, index) => (
                    <ProjectItem
                        key={index}
                        title={title}
                        description={description}
                        slug={slug}
                        thumbnailImage={relativePath}
                    />
                ))}
            </S.ListWrapper>
            
        </Layout>
    )
};

export default ProjectsPage;