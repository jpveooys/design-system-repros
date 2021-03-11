import { DatePicker } from "@royalnavy/react-component-library";
import React from 'react'
import styled from "styled-components";

import { Main } from '../../layouts'

const DatePickerWrapper = styled.div`
  width: 300px;
`

export const Home: React.FC<unknown> = () => (
  <Main>
    <h1>Hello, World!</h1>
    <DatePickerWrapper>
      <DatePicker />
    </DatePickerWrapper>
  </Main>
)
