import React from 'react'
import { IconChain, IconPlace } from "@royalnavy/icon-library";
import styled from "styled-components";

import { Main } from '../../layouts'

const StyledIconPlace = styled(IconPlace)`
  color: red;
`

const StyledIconChain = styled(IconChain)`
  color: red;
`

export const Home: React.FC = () => (
  <Main>
    <h1>World, hello!</h1>
    <StyledIconPlace size={52} />
    <StyledIconChain size={52} />
  </Main>
)
