import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import RepoCard from "../components/cards/repo"

const IndexPage = () => {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")
            .then(r => r.json())
            .then(data => {
                setRepos(data)
            })
    }, [setRepos])

    return <Layout>
        <div className="flex items-center w-full flex-col">
            {repos &&
                repos.map((it, index) => <RepoCard url={it} key={index} isFirst={index===0}/>)
            }
        </div>
    </Layout>

}

export function Head() {
    return (
        <title>Cloudstream repos</title>
    )
}

export default IndexPage
