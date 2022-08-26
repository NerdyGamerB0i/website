import React, {useRef, useEffect} from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

import bgImage from "../media/phones.png"
import { Link } from "gatsby"

const NotFoundPage = () => {

  const firstBtn = useRef(null)
    
  useEffect(() => {
      firstBtn.current.focus()
  }, [firstBtn])

  return (
    <Layout>
        <Hero bg={bgImage}>
        <h1 className="mb-5 text-5xl font-bold">Not found</h1>
            <p className="mb-5 text-lg">Sorry 😔. We couldn’t find what you were looking for.</p>
            <Link ref={firstBtn} className="btn btn-primary" to="/">Home</Link>
        </Hero>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
