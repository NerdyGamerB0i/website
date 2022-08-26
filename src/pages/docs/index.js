import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import DocsCard from "../../components/cards/docs"

const DocsPage = () => {

    return <Layout>
        <div className="flex items-center w-full flex-col">
            <StaticQuery
                query={graphql`
                query {
                    allMarkdownRemark {
                            nodes {
                                frontmatter {
                                    title
                                }
                                excerpt
                                fileAbsolutePath
                            }
                        }
                    }
            `}
                render={data => (
                    <>{data.allMarkdownRemark.nodes.map(it => {
                        return <DocsCard md={it} key={it} />
                    })}</>
                )}
            />
        </div>
    </Layout>

}

export default DocsPage
