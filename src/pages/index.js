import React, {useEffect, useRef} from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"

import bgImage from "../media/phones.png"
import { Link } from "gatsby"

const IndexPage = () => {
    const firstBtn = useRef(null)
    
    useEffect(() => {
        firstBtn.current.focus()
    }, [firstBtn])

    return <Layout>
        <Hero bg={bgImage}>
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-lg">Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime.</p>
            <div className="flex justify-center w-full mb-5">
                <Link ref={firstBtn} className="btn btn-primary" to="/install">Install</Link>
                <div className="divider divider-horizontal" />
                <Link className="btn btn-primary" to="/repos">Repositories</Link>
            </div>
            <Link to="/docs" className="link">Documentation</Link>
        </Hero>
    </Layout>

}

export default IndexPage


export function Head() {
    return (
        <title>Cloudstream</title>
    )
}