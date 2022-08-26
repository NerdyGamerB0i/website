import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import rehypeReact from "rehype-react"

function DivMixin(props) {
  console.log(props)
  if (props?.class != null && props.class.includes("gatsby-highlight")) {
    props.class = props.class + " mockup-code mb-5"
  }
  return <div {...props} />
}

const componentMap = {
  div: DivMixin,
  a: (props) => {
    return <Link className="link" to={props?.href} {...props} />
  },
  ol: (props) => {
    return <ul className="steps steps-vertical" {...props} />
  },
  li: (props) => {
    return <li className="step" {...props} />
  },
  hr: (props) => {
    return <div class="divider" {...props} />
  }
}


export default function PageTemplate({ data: { markdownRemark } }) {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: componentMap,
    Fragment: ({ children }) => {
      return <div className="prose contents">{children}</div>
    }
  }).Compiler

  return (
    <Layout>
      <div className="flex items-center w-full flex-col">
        <div class="text-sm breadcrumbs md-5">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            <li>{markdownRemark.frontmatter.title}</li>
          </ul>
        </div>
        <div className="w-full mx-10 md:w-2/3 card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 class="card-title">{markdownRemark.frontmatter.title}</h2>
            {renderAst(markdownRemark.htmlAst)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export function Head({data}) {
  return (
      <title>{data.markdownRemark.frontmatter.title}</title>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      htmlAst
    }
  }
`