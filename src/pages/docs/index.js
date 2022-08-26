import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import DocsCard from "../../components/cards/docs"
import bgImage from "../../media/phones.png"

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


export function Head() {
    return (
        <>
            <title>Cloudstream 404</title>
            <meta property="og:title" content="Cloudstream" />
            <meta property="og:description" content="Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />            <meta name="google-site-verification" content="eJAZtihmv0cJwd54kImmb2IfwLskeCfyW7gEm_HgXd8" />
        </>
    )
}