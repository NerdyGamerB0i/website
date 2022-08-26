import React from "react";
import { Link } from "gatsby";
import { node2slug } from "../../utils";

const DocsCard = ({ md }) => {

    return <article className="card card bg-base-200 shadow-xl w-full mx-10 md:w-2/3 mb-5">
        <div className="card-body">
            <h2 className="card-title">{md.frontmatter.title}</h2>
            <p>
                {md.excerpt}
            </p>
            <div className="card-actions justify-end">
                <Link to={node2slug(md)} className="btn btn-primary">View</Link>
            </div>
        </div>
    </article>
}

export default DocsCard