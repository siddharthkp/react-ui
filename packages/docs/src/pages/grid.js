import React from 'react'
import { Link, Grid, Column, Row } from 'react-ui'
import { Page, Props, Example, Paragraph, Section, Badge } from '../components'

const Documentation = () => {
  return (
    <Page
      title="Grid"
      tagline="Use Grid to control higher level layout"
      badges={[<Badge key={0}>Layout</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Grid>
            <Row css={{ height: 20, background: 'reds.200' }} />
            <Column span={2} css={{ height: 140, background: 'greens.200' }} />
            <Column span={10} css={{ height: 140, background: 'blues.200' }} />
          </Grid>
        </Example.Preview>
        <Example.Code>
          {`
            <Grid>
              <Row />
              <Column span={2} />
              <Column span={10} />
            </Grid>
          `}
        </Example.Code>
      </Example>

      <Section title="Props: Grid">
        <Props
          props={[
            {
              name: 'gap',
              type: 'enum',
              options: ['auto', 'none'],
              description: 'Turn on automatic/smart gap between elements',
              default: 'none'
            },
            {
              name: 'columnGap',
              type: 'number',
              description: 'gap between multiple columns',
              options: ['units on the space scale'],
              default: '0'
            },
            {
              name: 'rowGap',
              type: 'number',
              description: 'gap between multiple rows',
              options: ['units on the space scale'],
              default: '0'
            }
          ]}
        />
      </Section>

      <Section title="Props: Column">
        <Props
          props={[
            {
              name: 'span',
              type: 'number',
              options: ['0-12'],
              description: 'number of grid units a component takes',
              default: '1'
            },
            {
              name: 'start',
              type: 'number',
              options: ['1-12'],
              description: 'number of grid units a component takes'
            },
            {
              name: 'end',
              type: 'number',
              options: ['1-12'],
              description: 'number of grid units a component takes'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Paragraph>
          A grid always has 12 units to distribute it's contents.
        </Paragraph>

        <Example title="start + span">
          <Example.Preview>
            <Grid css={{ height: 40 }}>
              <Column start={1} end={4} css={{ background: 'reds.200' }}>
                1 to 4
              </Column>
              <Column start={6} end={7} css={{ background: 'greens.200' }}>
                6-7
              </Column>
              <Column start={9} end={12} css={{ background: 'blues.200' }}>
                9 to 12
              </Column>
            </Grid>
          </Example.Preview>
          <Example.Code>{`
            <Grid>
              <Column start={1} end={4}>1 to 4</Column>
              <Column start={6} end={7}>6-7</Column>
              <Column start={9} end={12}>9 to 12</Column>
            </Grid>
          `}</Example.Code>
        </Example>

        <Paragraph>Row always takes 12 units</Paragraph>

        <Example title="row + column">
          <Example.Preview>
            <Grid>
              <Row css={{ height: 20, background: 'reds.200' }}>header</Row>
              <Column span={2} css={{ height: 140, background: 'greens.200' }}>
                sidebar
              </Column>
              <Column span={10} css={{ height: 140, background: 'blues.200' }}>
                main
              </Column>
            </Grid>
          </Example.Preview>
          <Example.Code>{`
            <Grid>
              <Row css={{ height: '20px' }}>header</Row>
              
              <Column span={2} css={{ height: '140px' }}>
                sidebar
              </Column>
              <Column span={10} css={{ height: '140px' }}>
                main
              </Column>
            </Grid>
          `}</Example.Code>
        </Example>

        <Paragraph>
          When passed more than 12 units of contents, the contents autoflow
          inside the grid.
        </Paragraph>

        <Example title="Overflow">
          <Example.Preview>
            <Grid columnGap={2} rowGap={2}>
              {new Array(12).fill(true).map((value, index) => (
                <Column
                  span={4}
                  key={index}
                  style={{
                    height: 100,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://i.picsum.photos/id/${index +
                      160}/200/200.jpg)`
                  }}
                />
              ))}
            </Grid>
          </Example.Preview>
          <Example.Code>{`
            <Grid columnGap={2} rowGap={2}>
              {images.map(url => (
                <Column
                  span={4}
                  key={url}
                  css={{
                    height: '100px',
                    backgroundImage: url,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </Grid>
          `}</Example.Code>
        </Example>

        <Paragraph>The web is responsive, so is the grid.</Paragraph>

        <Example title="Responsive - try resizing the browser window.">
          <Example.Preview>
            <Grid>
              <Row css={{ height: 20, background: 'reds.200' }}>header</Row>
              <Column
                span={[12, 12, 2]}
                css={{ height: [40, 40, 140], background: 'yellows.200' }}
              >
                sidebar
              </Column>
              <Column
                span={[12, 6, 5]}
                css={{ height: 140, background: 'greens.200' }}
              >
                column
              </Column>
              <Column
                span={[12, 6, 5]}
                css={{ height: 140, background: 'blues.200' }}
              >
                column
              </Column>
            </Grid>
          </Example.Preview>
          <Example.Code>{`
            <Grid>
              <Row css={{ height: '20px' }}>header</Row>

              <Column span={[12, 2, 2]} css={{ height: [40, 140, 140]}}>
                sidebar
              </Column>
              <Column
                span={[12, 5, 5]} css={{ height: '140px' }}>
                half &
              </Column>
              <Column span={[12, 5, 5]} css={{ height: '140px' }}>
                half
              </Column>
            </Grid>
          `}</Example.Code>
        </Example>

        <Paragraph>
          Read more about <Link href="/todo">responsive styles</Link> here.
        </Paragraph>
      </Section>
    </Page>
  )
}

export default Documentation
