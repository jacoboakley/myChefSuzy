import React from 'react'
import styled from 'styled-components'

import splash from '../images/food.jpg'

import Layout from '../components/layout'

const Image = styled.img `
  width: 100%;
`

const IndexPage = () => (
  <Layout>
   <Image src={splash} />
   <h1>Hi people</h1>
   <p>Welcome to your new Gatsby site.</p>
   <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
