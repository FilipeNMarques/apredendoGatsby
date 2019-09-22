import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
   query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields{
        slug
      }
      frontmatter {
        title
        description
      }
      html
      
    }
  }
`

export default BlogPost