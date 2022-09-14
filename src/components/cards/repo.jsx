import React, { useState, useEffect } from "react";

import CompatBtn from "../compatbtn";
import { GoVerified } from "react-icons/go";

const RepoCard = ({ data, isFirst }) => {
    const [data, setData] = useState(null)

    const url = (typeof data === 'string') ? data : data.url
    const isVerified = (typeof data === 'object' && data.verified)

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

    return <article className="card bg-base-200 shadow-xl w-full mx-10 md:w-2/3 mb-5">
        <div className="card-body flex flex-row">
            <h2 className="card-title">
                {isVerified &&
                    <div class="tooltip" data-tip="Verified safe">
                        <GoVerified class="stroke-current flex-shrink-0 h-6 w-6 success" />
                    </div>
                }
                {data.name || "Unnamed"}
            </h2>
            <p>
                {data.description || "No description provided"}
            </p>
            <div className="card-actions justify-end">
                <div className="btn-group">
                    <CompatBtn
                        autoFocus={isFirst}
                        group={true}
                        className="btn-primary"
                        onClick={() => {
                            if (window.RepoApi !== undefined) {
                                window.RepoApi.installRepo(url)
                            } else {
                                window.open(`cloudstreamrepo://${url.replace(/^https?:\/\//, "")}`)
                            }
                        }}
                        >Install</CompatBtn>
                    <CompatBtn group={true} 
                        onClick={() => {
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
                    }}>Copy URL</CompatBtn>
                </div>
            </div>
        </div>
    </article>
}

export default RepoCard
