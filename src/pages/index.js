import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CompatBtn from "../components/compatbtn"
import SEO from "../components/seo"

import bgImage from "../media/phones.webp"

const IndexPage = () => {
    return <Layout>
        <Hero bg={bgImage}>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-lg">
                Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime.
                <div className="divider" />
                On this official cloudstream/recloudstream site you can find downloads links and a list of repositories of extensions.
            </p>
            <div className="flex justify-center w-full mb-5">
                <CompatBtn autoFocus={true} className="btn-primary" href="/install/">Install</CompatBtn>
                <div className="divider divider-horizontal" />
                <CompatBtn className="btn-primary" href="/repos/">Repositories</CompatBtn>
            </div>
            <CompatBtn className="btn-secondary" href="/docs/">Guides, FAQ & Docs</CompatBtn>
        </Hero>
    </Layout>

}

export default IndexPage


export function Head() {
    return <SEO />
}