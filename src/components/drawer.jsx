import { graphql, StaticQuery } from "gatsby"
import React from "react"

import { Link } from "gatsby"
import { node2slug } from "../utils"

const Drawer = () => (
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/repos">Repositories</Link></li>
        <div className="divider">Docs</div>
        <li><Link to="/docs">Documentation</Link></li>
        <li><a href="/dokka/">Dokka</a></li>
        <StaticQuery
            query={graphql`
                query {
                    allMarkdownRemark {
                            nodes {
                                frontmatter {
                                    title
                                }
                                fileAbsolutePath
                            }
                        }
                    }
            `}
            render={data => (
                <>{data.allMarkdownRemark.nodes.map(it => {
                    return <li><Link to={node2slug(it)}>{it.frontmatter.title}</Link></li> 
                })}</>
            )}
        />
    </ul>)

export default Drawer