import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ imageData, title, description, url, tags}) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p className="tags">KEYWORDS: {tags}</p>
    <p>
      <a href={url}>VIEW POST ONLINE &rarr;</a>
    </p>
    <p>
      <Link to="/">&larr; BACK TO POSTS</Link>
    </p>
  </div>
)

export default Project;
