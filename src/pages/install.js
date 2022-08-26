import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"

import bgImage from "../media/phones.png"

const InstallPage = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.github.com/repos/recloudstream/cloudstream/releases")
            .then(r => r.json())
            .then(r => {
                let btns = []
                let nonPre = false
                let Pre = false;
                for (const entry of r) {
                    if (Pre && nonPre) continue;
                    console.log({Pre, nonPre, entry})
                    var apk = null;
                    for (const asset of entry.assets) {
                        if (asset.content_type !== "application/vnd.android.package-archive") continue;
                        apk = asset;
                    }
                    if (!apk) continue;

                    if (entry.prerelease || entry.tag_name === "pre-release") {
                        if (!Pre) {
                            btns.push({
                                pre: true,
                                url: entry.html_url,
                                apk: apk,
                                tag: entry.tag_name
                            })
                            Pre = true
                        }
                    } else if (!nonPre) {
                        btns.push({
                            pre: false,
                            url: entry.html_url,
                            apk: apk,
                            tag: entry.tag_name
                        })
                        nonPre = true
                    }
                }
                setData({ btns })
            })
    }, [setData])

    return <Layout>
        <Hero bg={bgImage}>
            <h1 className="mb-5 text-5xl font-bold">Installation</h1>
            {(data != null) &&
                <div className="flex flex-col items-center gap-3">{
                    data.btns.map(it => {
                        return <div className="btn-group" key={JSON.stringify(it)}>
                            <button className={"btn " + (it.pre?'btn-secondary':'btn-primary')} onClick={() => {
                                window.open(it.apk.browser_download_url)
                            }}>Download {it.tag}</button>
                            <button className="btn"onClick={() => {
                                window.open(it.url)
                            }}>Release notes</button>
                        </div>
                    })}
                </div>
            }
            {(data == null) &&
                <a href="https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease.apk" className="btn btn-primary">Download pre-release</a>
            }
        </Hero>
    </Layout>

}

export function Head() {
    return (
        <title>Cloudstream install</title>
    )
}

export default InstallPage
