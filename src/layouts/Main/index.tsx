import React from 'react'
import styled from "styled-components";


const Wrapper = styled.div`
  padding: 2rem;
`

export interface MainProps {
  children?: React.ReactNode
}

export const Main: React.FC<MainProps> = ({ children }) => <Wrapper>{children}</Wrapper>

Main.displayName = 'Main-Layout'
