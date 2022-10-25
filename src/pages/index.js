import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CompatBtn from "../components/compatbtn"

import bgImage from "../media/phones.png"

const IndexPage = () => {
    return <Layout>
        <Hero bg={bgImage}>
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-lg">Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime.</p>
            <div className="flex justify-center w-full mb-5">
                <CompatBtn autoFocus={true} className="btn-primary" href="/install">Install</CompatBtn>
                <div className="divider divider-horizontal" />
                <CompatBtn className="btn-primary" href="/repos">Repositories</CompatBtn>
            </div>
            <CompatBtn className="btn-secondary" href="/docs">Guides, FAQ & Docs</CompatBtn>
        </Hero>
    </Layout>

}

export default IndexPage


export function Head() {
    return (
        <>
            <title>Cloudstream</title>
            <meta property="og:title" content="Cloudstream" />
            <meta property="og:description" content="Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="google-site-verification" content="c7TphrPJk4AXlG4P_J3ZRpJ7V3yFzG_cjd-A37ih1fE" />
        </>
    )
}