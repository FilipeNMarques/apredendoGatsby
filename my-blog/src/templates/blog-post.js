import React from "react"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmetter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
