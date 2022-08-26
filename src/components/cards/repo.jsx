import React, { useState, useEffect, useRef } from "react";

const RepoCard = ({ url, isFirst }) => {
    const [data, setData] = useState(null)
    const firstButton = useRef(null)

    useEffect(() => {
        if (!isFirst) return;
        console.log({firstButton})
        firstButton.current?.focus()
    }, [firstButton])

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(dat => {
                setData(dat)
            })
    }, [setData])

    if (data == null) {
        return <progress className="progress progress-primary w-full mx-10 md:w-2/3 mb-5"></progress>
    }

    return <article className="card card bg-base-200 shadow-xl w-full mx-10 md:w-2/3 mb-5">
        <div className="card-body">
            <h2 className="card-title">{data.name || "Unnamed"}</h2>
            <p>
                {data.description || "No description provided"}
            </p>
            <div className="card-actions justify-end">
                <div className="btn-group">
                    <button ref={firstButton} className="btn btn-primary" onClick={() => {
                        window.open(`cloudstreamrepo://${url.replace(/^https?:\/\//, "")}`)
                    }}>Install</button>
                    <button className="btn" onClick={() => {
                        if (navigator.clipboard) {
                            navigator.clipboard.writeText(url);
                        } else {
                            var tempInput = document.createElement("input");
                            tempInput.value = url;
                            document.body.appendChild(tempInput);
                            tempInput.select();
                            document.execCommand("copy");
                            document.body.removeChild(tempInput);
                        }
                    }}>Copy URL</button>
                </div>
            </div>
        </div>
    </article>
}

export default RepoCard