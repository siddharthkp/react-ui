import React from 'react'
import Navigation from '../components/navigation'

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
    <Header css={{ fontFamily: 'monospace', letterSpacing: 4 }}>DOCS</Header>
    <Main>
      <Sidebar>
        <Navigation />
      </Sidebar>
      <Content>{props.children}</Content>
    </Main>
    <Footer>fin</Footer>
  </Layout>
)
