import React from "react"

import bgImage from "../media/phones.webp"
import ld from "./ld.json"
import logo from "../media/icon.svg"

const desc = "Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime. On this official cloudstream/recloudstream site you can find downloads links and a list of repositories of extensions."

const SEO = ({children, title, description}) => {
    return <>
        <title>{title || "Cloudstream"}</title>
        <meta property="og:title" content={title || "Cloudstream"} />
        <meta property="og:description" content={description || desc} />
        <meta property="og:image" content={bgImage} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="c7TphrPJk4AXlG4P_J3ZRpJ7V3yFzG_cjd-A37ih1fE" />
        <script type="application/ld+json">{JSON.stringify(ld)
          .replace("${logo}", logo)
          .replace("${title}", title)
          .replace("${description}", (description || desc))}
        </script>
        {children}
    </>
}

export default SEO