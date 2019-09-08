import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//Styles
import * as S from "./styled"

import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile

/*
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (

  <StaticQuery
    query={graphql`
    query MySiteMetadata {
      site{
        siteMetadata{
          title
          description
          author
          position
        }
      }
    }

    `}
    render={({
      site: {
        siteMetadata: { title, position, description }
      },

    }) => (
        <div className="Profile-wrapper">
          <h1>{title}</h1>
          <h2>{position}</h2>
          <p>{description}</p>
        </div>
      )}
  />
  )
*/
