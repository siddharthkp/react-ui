import React from 'react'
import Navigation from '../components/navigation'
import { Element } from 'react-ui'

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  ...props
}) => (
  <Layout>
    <Main>
      <Element as={Sidebar} component="Sidebar">
        <Navigation />
      </Element>
      <Content>{props.children}</Content>
    </Main>
  </Layout>
)
