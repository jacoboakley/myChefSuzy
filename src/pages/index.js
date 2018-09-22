import React from 'react'
import styled from 'styled-components'

import cooking from '../videos/cooking.mp4'
import cooking2 from '../videos/cooking2.mp4'

import Layout from '../components/layout'

var video;
(window.innerHeight > window.innerWidth) ? video=cooking2 : video=cooking;

const Container = styled.div `
  height: 100vh;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
`

const Video = styled.video `
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Video autoPlay muted>
        <source src={video} type="video/mp4" />
      </Video>
    </Container>
  </Layout>
)

export default IndexPage
