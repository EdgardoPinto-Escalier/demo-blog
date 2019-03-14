import React from "react"
import { graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges;


return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {projects.map(({ node: project }) => {
      const title = project.title;
      const description = project.description;
      const slug = project.slug;
      const imageData = project.image.childImageSharp.fluid;
      const tags = project.tags;

      return(
        <ProjectPreview 
          key={project.title}
          title={title}
          description={description}
          slug={slug}
          imageData={imageData}
          tags={tags}
        />
      )
    })}

  </Layout>
);
};

export default IndexPage
