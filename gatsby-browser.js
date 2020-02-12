/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import Helmet from 'react-helmet'
import ContextProvider from './src/global-state/state'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html,
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0px;
        padding: 0px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    label {
        margin: 0px;
    }

    input,
    select {
        outline: none;
    }
`

export const wrapRootElement = ({ element }) => {
    return (
        <ContextProvider>
            <Helmet>
                <title>Animal Top Trumps 📇</title>
            </Helmet>
            <GlobalStyle />
            {element}
        </ContextProvider>
    )
}
