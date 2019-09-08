import React from "react"

import * as S from "./styled"
//Icons

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2"
import { Lightbulb } from "styled-icons/fa-regular/Lightbulb"
import { ArrowAltCircleUp } from "styled-icons/fa-regular/ArrowAltCircleUp"
import { GridAlt } from "styled-icons/boxicons-solid/GridAlt"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Ir para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <SearchAlt2 />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o Tema">
        <Lightbulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar Visualização">
        <GridAlt />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <ArrowAltCircleUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
